// Components
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Support from "../components/Support";
import TextCarousel from "../components/TextCarousel";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Support />
      <TextCarousel />
    </>
  );
}

export default HomePage;
