import { useRef } from "react";
import CardItem from "../components/CardItem";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/NavBar";
import ProductSection from "../components/ProductSection";
import AboutSection from "../components/AboutSection";
import { Outlet } from "react-router-dom";
import FadeInSection from "../components/FadeInSection";
const HomePage = () => {
  const productRef = useRef<HTMLDivElement>(null);

  const scrollToProducts = () => {
    productRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar scrollToProducts={scrollToProducts} />
      <FadeInSection delay={0}>
        <HeroSection></HeroSection>
      </FadeInSection>
      <div ref={productRef} className="h-[100px] w-full" />
      <FadeInSection delay={100}>
        <ProductSection />
      </FadeInSection>
      <Outlet></Outlet>
      <FadeInSection delay={500}>
        <AboutSection></AboutSection>
      </FadeInSection>
      <FadeInSection delay={500}>
        <CardItem />
      </FadeInSection>
      <FadeInSection delay={500}>
        <Footer />
      </FadeInSection>
    </>
  );
};

export default HomePage;
