// Components
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Support from "../components/Support";
import TextCarousel from "../components/TextCarousel";
import Empower from "../components/Empower";
import Better from "../components/Better";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Support />
      <TextCarousel />
      <Empower />
      <Better />
    </>
  );
}

export default HomePage;
