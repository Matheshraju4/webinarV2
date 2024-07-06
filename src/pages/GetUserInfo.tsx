import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";
import { Input } from "../components/ui/input";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useRecoilState } from "recoil";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import { razorpaypaymentId } from "../lib/atom";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z
    .string()
    .min(3, {
      message: "Please provide a valid email.",
    })
    .email({ message: "Please provide a valid email." }),
  contact: z
    .string()
    .min(10, {
      message: "Please provide a valid contact number.",
    })
    .max(10, {
      message: "Please provide a valid contact number.",
    }),
});

export default function ProfileForm() {
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate for navigation
  const [, setpaymentId] = useRecoilState(razorpaypaymentId); // Define paymentId and setpaymentId

  useEffect(() => {
    // Dynamically load Razorpay script
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Remove script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  let openRazorpay = async (
    username: string,
    email: string,
    contact: string
  ) => {
    try {
      const response = await axios.post(
        "https://api.hustlersacademy.xyz/createuser",
        {
          name: username,
          email,
          phoneNumber: contact,
        }
      );
      console.log("response", response.data);
      const { orderId, razopaypaymentId } = response.data;
      console.log("Backend Response", response.data);
      if (orderId) {
        const options = {
          key: "rzp_live_k64ecgk5XIPVgp",
          amount: "9900",
          currency: "INR",
          name: "Delta Art",
          description: "Webinar project",
          image:
            "https://www.google.com/imgres?q=nextjs%20image%20icon%20url&imgurl=https%3A%2F%2Fstatic-00.iconduck.com%2Fassets.00%2Fnext-js-icon-2048x2048-5dqjgeku.png&imgrefurl=https%3A%2F%2Ficonduck.com%2Ficons%2F11295%2Fnext-js&docid=3LREy_izk5fyWM&tbnid=BHwjLUdxlfD00M&vet=12ahUKEwib49Wqhb-GAxW1SGwGHeLaACAQM3oECBYQAA..i&w=2048&h=2048&hcb=2&ved=2ahUKEwib49Wqhb-GAxW1SGwGHeLaACAQM3oECBYQAA",
          order_id: razopaypaymentId,
          handler: async function (response: any) {
            try {
              const {
                razorpay_payment_id,
                razorpay_signature,
                razorpay_order_id,
              } = response;
              console.log("razorpay Response", response);
              const verifyResponse = await axios.post(
                "https://api.hustlersacademy.xyz/verify",
                {
                  order_idServer: orderId,
                  razorpay_order_id,
                  razorpay_payment_id,
                  razorpay_signature,
                }
              );

              if (verifyResponse.data.success) {
                console.log("Success", verifyResponse);
                toast.success("Payment Successful");
                if (razorpay_payment_id) {
                  setpaymentId(razorpay_payment_id);
                  localStorage.setItem("paymentId", razorpay_payment_id);
                  navigate("/checkout");
                }
              } else {
                console.log("Verification Failed", verifyResponse);
                toast.error("Payment Verification Failed");
              }
            } catch (error) {
              console.error("Verification Error", error);
              toast.error("Payment Verification Error");
            }
          },
          prefill: {
            name: username,
            email: email,
            contact: contact,
          },
          notes: {
            address: "Razorpay Corporate Office",
          },
          theme: {
            color: "#1d4ed8",
          },
        };
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
      } else {
        toast.error("Order ID not received from backend");
      }
    } catch (error) {
      console.error("Error in openRazorpay", error);
      toast.error("Something went wrong");
    }
  };

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      contact: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoader(true);
    await openRazorpay(values.username, values.email, values.contact);
    setLoader(false);

    console.log("values", values);
  }

  return (
    <Form {...form}>
      <div className="flex flex-col justify-center items-center  w-full p-4">
        <div className="w-full text-center p-4 mt-2 text-3xl md:text-6xl font-bold rounded-xl">
          <h1>Super Charge Your Webinar</h1>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-full p-4">
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 md:w-1/2 w-full md:pt-15 md:p-10 p-8 rounded-xl bg-white shadow-lg "
        >
          <h1 className="md:text-4xl text-2xl font-bold mb-8 text-center">
            Enter Valid Information
          </h1>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl font-semibold">Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="John Doe"
                    {...field}
                    className="border-slate-400 text-slate-500 focus:text-slate-600 focus:border-black focus:border-2"
                  />
                </FormControl>
                <FormDescription>
                  <FormMessage />
                </FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl font-semibold">Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="john@gmail.com"
                    {...field}
                    className="border-slate-600 text-slate-500 focus:text-slate-600 focus:border-black focus:border-2"
                  />
                </FormControl>
                <FormDescription>
                  <FormMessage />
                </FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="contact"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl font-semibold">
                  WhatsApp Number
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="9456548565"
                    {...field}
                    className="border-slate-600 text-slate-500 focus:text-slate-600 focus:border-black focus:border-2"
                  />
                </FormControl>
                <FormDescription>
                  <FormMessage />
                </FormDescription>
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-lime-500 to-green-500 hover:from-green-600 hover:to-lime-600 rounded-xl text-2xl p-6"
          >
            {loader ? "Loading..." : "Submit & Pay"}
          </Button>
        </form>
      </div>
    </Form>
  );
}
