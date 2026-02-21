import Header from "./components/Header";
import Hero from "./page/hero/Hero";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import About from "./page/about/About";

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}
