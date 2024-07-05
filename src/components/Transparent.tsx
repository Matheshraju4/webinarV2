const Transparent = ({
  img,
  name,
  address,
}: {
  img: string;
  name: string;
  address: string;
}) => {
  return (
    <div className="bg-transparent flex flex-row items-center justify-start gap-5 text-black  text-lg font-normal">
      <img
        src={img}
        className="max-w-10 rounded-full h-full border border-black"
      />
      <div className="flex flex-row items-center ">
        {`${name} -  `}
        <p className=" pl-1 text-sm md:text-md"> {` ${address}`}</p>
      </div>
    </div>
  );
};

export default Transparent;
