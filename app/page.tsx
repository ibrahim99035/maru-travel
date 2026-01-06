import { Hero } from "@/components/hero"
import { FeaturedDestinations } from "@/components/featured-destinations"
import { TravelPackages } from "@/components/travel-packages"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Newsletter } from "@/components/newsletter"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <FeaturedDestinations />
        <TravelPackages />
        <WhyChooseUs />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
