import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Clock, Users, Star } from "lucide-react"

const packages = [
  {
    id: 1,
    name: "Mediterranean Escape",
    duration: "10 Days",
    groupSize: "Up to 12",
    price: "$4,999",
    rating: 4.9,
    reviews: 127,
    image: "/mediterranean-cruise-luxury-yacht.jpg",
    features: ["Luxury accommodations", "All meals included", "Private guided tours", "Airport transfers"],
  },
  {
    id: 2,
    name: "Asian Heritage Tour",
    duration: "14 Days",
    groupSize: "Up to 16",
    price: "$5,499",
    rating: 5.0,
    reviews: 89,
    image: "/asian-temple-luxury-resort.jpg",
    features: ["5-star hotels", "Cultural experiences", "Expert local guides", "Domestic flights included"],
  },
  {
    id: 3,
    name: "Alpine Adventure",
    duration: "7 Days",
    groupSize: "Up to 10",
    price: "$3,799",
    rating: 4.8,
    reviews: 156,
    image: "/swiss-alps-luxury-chalet-winter.jpg",
    features: ["Mountain resort stays", "Ski passes included", "Gourmet dining", "Spa access"],
  },
]

export function TravelPackages() {
  return (
    <section id="packages" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-balance">Curated Travel Packages</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            All-inclusive luxury experiences designed for discerning travelers
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <Card key={pkg.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-56 bg-cover bg-center" style={{ backgroundImage: `url(${pkg.image})` }} />
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-2xl font-serif">{pkg.name}</CardTitle>
                  <div className="flex items-center gap-1 text-sm">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{pkg.rating}</span>
                    <span className="text-muted-foreground">({pkg.reviews})</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {pkg.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {pkg.groupSize}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-3xl font-bold">{pkg.price}</span>
                    <span className="text-muted-foreground"> / person</span>
                  </div>
                  <Button>Book Now</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
