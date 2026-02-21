import {Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import Contact from "./pages/Contact";
import HelpCenter from "./pages/HelpCenter";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/help" element={<HelpCenter />} />
      </Routes>
      <Footer />
    </div>
  );
}