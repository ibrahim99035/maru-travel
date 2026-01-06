import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url(/StockSnap_NWAPXFUMDW.jpg?height=1080&width=1920&query=luxury+tropical+beach+resort+aerial+view)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 text-balance">
          Discover Your Next
          <br />
          Extraordinary Journey
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto text-pretty">
          Experience luxury travel curated by experts. From pristine beaches to cultural wonders, we create
          unforgettable memories.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8">
            Explore Destinations
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20"
          >
            View Packages
          </Button>
        </div>
      </div>
    </section>
  )
}
