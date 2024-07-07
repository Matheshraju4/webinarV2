import { BrowserRouter, Routes, Route } from "react-router-dom";

import ComponentsTesting from "./pages/ComponentsTesting";
import ProfileForm from "./pages/GetUserInfo";
import CheckOut from "./pages/CheckOut";

import { Helmet } from "react-helmet";
import { RecoilRoot } from "recoil";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import TermsAndCondition from "./pages/TermsAndCondition";
import { ContactUs } from "./pages/ContactUs";

function App() {
  return (
    <>
      <RecoilRoot>
        <Helmet>
          <title>Webinar</title>
          <link rel="icon" href="./unload.png" />
        </Helmet>
        <div className="bg-black font-sans">
          <BrowserRouter basename="/">
            <Routes>
              <Route path="/" element={<ComponentsTesting />} />
              <Route path="/userInfo" element={<ProfileForm />} />
              <Route path="/checkout" element={<CheckOut />} />
              <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
              <Route path="/refundPolicy" element={<RefundPolicy />} />
              <Route
                path="/TermsAndConditions"
                element={<TermsAndCondition />}
              />
              <Route path="/contactus" element={<ContactUs />} />
            </Routes>
          </BrowserRouter>
        </div>
      </RecoilRoot>
    </>
  );
}

export default App;
