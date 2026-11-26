
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import StudentsCarousel from "./pages/StudentsCarousel";
import Cards from "./pages/Cards";
import Footer from "./layout/Footer";
export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
       <Cards />
      <StudentsCarousel />
      <Footer/>
   
    </div>
  );
}
