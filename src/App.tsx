import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import ComponentsTesting from "./pages/ComponentsTesting";
import ProfileForm from "./pages/GetUserInfo";
import CheckOut from "./pages/CheckOut";
import { RecoilRoot } from "recoil";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-black">
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/components" element={<ComponentsTesting />} />
          <Route path="/userInfo" element={<ProfileForm />} />
          <Route path="/checkOut" element={<CheckOut />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
