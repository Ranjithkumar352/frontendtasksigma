import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Brands from "../components/Brands";
import Services from "../components/Services";
import WorkingProcess from "../components/WorkingProcess";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-brandDark">
      <Navbar />
      <Hero />
      <Brands />
      <Services />
      <WorkingProcess />
      <Testimonials />
      <Footer />
    </div>
  );
}
