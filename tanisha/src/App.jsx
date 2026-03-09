import Header from "./components/Header";
import Hero from "./page/hero/Hero";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import About from "./page/about/About";
import Login from "./page/login/Login";
import Register from "./page/register/Register";
import PostAd from "./page/postad/Postad";

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/post-ad" element={<PostAd />} />
      </Routes>
      <Footer />
    </div>
  );
}
