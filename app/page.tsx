import AboutSection from "@/components/AboutSection";
import CardsSection from "@/components/CardsSection";
import Hero from "@/components/Hero";
import StackedCards from "@/components/StackedCards";
import { Car } from "lucide-react";
export default function Home() {
  return (
   <div>

  <Hero />
  <StackedCards/>
  <CardsSection/>
<div  className="h-[900px] bg-red-50"/>
    </div>
  );
}
