// Components
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Support from "../components/Support";
import TextCarousel from "../components/TextCarousel";
import Empower from "../components/Empower";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Support />
      <TextCarousel />
      <Empower />
    </>
  );
}

export default HomePage;
