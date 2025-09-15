import Gallery from "@/components/Gallery";
import GenerateSection from "@/components/GenerateSection";
import HeroCarousel from "@/components/HeroCarousel";

export default function Home() {
  return (
    <main className="pt-20 min-h-screen">
      <HeroCarousel />
      <GenerateSection />
      <Gallery />
    </main>
  )
}
