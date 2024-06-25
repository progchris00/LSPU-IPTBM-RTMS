// Components
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Support from "../components/Support";
import TextCarousel from "../components/TextCarousel";
import Empower from "../components/Empower";
import Better from "../components/Better";
import Testimony from "../components/Testimony";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Support />
      <TextCarousel />
      <Empower />
      <Better />
      <Testimony />
      <Contacts />
      <Footer />
    </>
  );
}

export default HomePage;
