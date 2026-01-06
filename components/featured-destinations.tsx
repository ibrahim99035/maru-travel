import { Card, CardContent } from "@/components/ui/card"
import { MapPin } from "lucide-react"

const destinations = [
  {
    id: 1,
    name: "Santorini, Greece",
    description: "Stunning sunsets and white-washed architecture",
    image: "/santorini-white-blue.png",
    tours: 12,
  },
  {
    id: 2,
    name: "Bali, Indonesia",
    description: "Tropical paradise with rich culture",
    image: "/bali-rice-temple.png",
    tours: 18,
  },
  {
    id: 3,
    name: "Swiss Alps",
    description: "Majestic mountains and pristine lakes",
    image: "/swiss-alps-mountains-luxury-resort.jpg",
    tours: 9,
  },
  {
    id: 4,
    name: "Maldives",
    description: "Crystal-clear waters and overwater villas",
    image: "/maldives-overwater-bungalow-luxury.jpg",
    tours: 15,
  },
  {
    id: 5,
    name: "Dubai, UAE",
    description: "Modern luxury meets ancient traditions",
    image: "/dubai-burj-khalifa-luxury-skyline.jpg",
    tours: 14,
  },
  {
    id: 6,
    name: "Paris, France",
    description: "The city of lights and romance",
    image: "/paris-eiffel-tower-evening-lights.jpg",
    tours: 16,
  },
]

export function FeaturedDestinations() {
  return (
    <section id="destinations" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-balance">Featured Destinations</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Explore our handpicked selection of the world's most breathtaking destinations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <Card key={destination.id} className="group overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundImage: `url(${destination.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center gap-1 mb-1">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{destination.tours} tours available</span>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-serif font-semibold mb-2">{destination.name}</h3>
                <p className="text-muted-foreground">{destination.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
