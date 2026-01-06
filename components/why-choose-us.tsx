import { Award, Shield, HeadphonesIcon, Globe } from "lucide-react"

const features = [
  {
    icon: Award,
    title: "Award-Winning Service",
    description: "Recognized globally for excellence in luxury travel experiences",
  },
  {
    icon: Shield,
    title: "Travel Protection",
    description: "Comprehensive insurance and 24/7 support for peace of mind",
  },
  {
    icon: HeadphonesIcon,
    title: "Expert Guidance",
    description: "Personalized service from experienced travel consultants",
  },
  {
    icon: Globe,
    title: "Global Network",
    description: "Partnerships with premium hotels and resorts worldwide",
  },
]

export function WhyChooseUs() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-balance">Why Choose Maru Travel</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Your trusted partner in creating extraordinary travel memories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
