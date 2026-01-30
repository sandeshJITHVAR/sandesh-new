import AboutSection from "@/components/AboutSection";
import CardsSection from "@/components/CardsSection";
import Hero from "@/components/Hero";
import StackedCards from "@/components/StackedCards";
import { Car } from "lucide-react";
export default function Home() {
  return (
   <div className="bg-gradient-to-br from-[#050505] via-[#0b0b0b] to-black">

  <Hero />
  <AboutSection/>
  <StackedCards/>
  <CardsSection/>
<div  className="h-[900px] "/>
    </div>
  );
}
