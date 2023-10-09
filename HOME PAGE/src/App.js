import "./App.css";
import AboutUs from "./components/AboutUs";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Testimonial></Testimonial>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </div>
  );
}

export default App;
