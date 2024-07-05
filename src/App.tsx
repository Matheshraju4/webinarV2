import { BrowserRouter, Routes, Route } from "react-router-dom";

import ComponentsTesting from "./pages/ComponentsTesting";
import ProfileForm from "./pages/GetUserInfo";
import CheckOut from "./pages/CheckOut";

import { Helmet } from "react-helmet";
import { RecoilRoot } from "recoil";

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
              <Route path="/checkOut" element={<CheckOut />} />
            </Routes>
          </BrowserRouter>
        </div>
      </RecoilRoot>
    </>
  );
}

export default App;
