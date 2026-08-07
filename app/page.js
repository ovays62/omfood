import Navbar from "@/components/ui/Navbar";
import GalaxyBackground from "@/components/home/GalaxyBackground";
import Hero from "@/components/home/Hero";
import FoodShowcase from "@/components/home/FoodShowcase";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05030d] text-white">

      <GalaxyBackground />

      <Navbar />

      <div className="relative z-10">
        <Hero />

        <FoodShowcase />
      </div>

    </main>
  );
}
