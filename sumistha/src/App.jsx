import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import HelpCenter from "./Pages/HelpCenter/HelpCenter";
import PostAd from "./Pages/PostAd/PostAd";
import TermsConditions from "./Pages/Terms_and_Conditions/Terms_and_Conditions";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";
import Account from "./Pages/Account/Account";
import SafetyTips from "./Pages/SafetyTips/SafetyTips";
import Search from "./Pages/Search/Search";
export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      <Navbar />

      <div className="grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/help" element={<HelpCenter />} />
          <Route path="/post-ad" element={<PostAd />} />
          <Route path="/terms" element={<TermsConditions />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/account" element={<Account />} />
          <Route path="/safety-tips" element={<SafetyTips />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>

      <Footer />

    </div>
  );
}