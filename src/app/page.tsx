import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import CorePromise from "@/components/sections/CorePromise";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import PropTechFocus from "@/components/sections/PropTechFocus";
import Guarantee from "@/components/sections/Guarantee";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/layout/Footer";
import StarfieldWrapper from "@/components/effects/StarfieldWrapper";
import FloatingOrbs from "@/components/effects/FloatingOrbs";

export default function Home() {
  return (
    <>
      <StarfieldWrapper />
      <FloatingOrbs />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <CorePromise />
        <Problem />
        <Solution />
        <PropTechFocus />
        <Guarantee />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
