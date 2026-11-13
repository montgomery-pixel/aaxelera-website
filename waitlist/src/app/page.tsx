import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Benefits, Faq, FinalCta, Footer, HowItWorks, PriceComparison } from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Benefits />
        <PriceComparison />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
