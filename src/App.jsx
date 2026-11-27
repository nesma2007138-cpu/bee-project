import { Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Home from "./pages/Home";
import Cards from "./pages/Cards";
import StudentsCarousel from "./pages/StudentsCarousel";
import AboutUs from "./pages/AboutUs";

function HomePage() {
  return (
    <>
      <Home />
      <Cards />
      <StudentsCarousel />
    </>
  );
}

export default function App() {
  return (
    <div>
     
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Footer />
    </div>
  );
}
