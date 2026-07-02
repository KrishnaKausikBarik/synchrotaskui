import React, { useEffect } from "react";
import Lenis from "lenis";
import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import Subscription from "../components/home/Subscription";
import Testimonials from "../components/home/Testimonials";
import FAQs from "../components/home/FAQs";
import Footer from "../components/layout/Footer";

const Home = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: "vertical", // vertical, horizontal
      gestureDirection: "vertical", // vertical, horizontal, both
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div>
      <Hero />
      <Services />
      <Subscription />
      <Testimonials />
      <FAQs />
      <Footer />
    </div>
  );
};

export default Home;
