import HeroCarousel from "./components/HeroCarousel"
import GenerateSection from "./components/GenerateSection"
import Gallery from "./components/Gallery"

export default function Home() {
  return (
    <main className="pt-20 min-h-screen">
      <HeroCarousel />
      <GenerateSection />
      <Gallery />
    </main>
  )
}
