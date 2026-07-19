import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car, TrendingDown, FileText } from "lucide-react";
import textureBg from "@/assets/texture-bg.png";

const services = [
  {
    icon: TrendingDown,
    title: "Diminished Value Reports",
    description: "Understand the lost market value of your vehicle after an accident. Even with perfect repairs, accident history affects market appeal. We provide the data.",
    features: ["Market Analysis", "Repair Data Review", "Professional Reports"],
    color: "text-primary",
  },
  {
    icon: Car,
    title: "Loss of Use Reports",
    description: "Insights into the daily rental rate of a comparable vehicle for the time you were without your car.",
    features: ["Daily Rate Analysis", "Duration Data", "Comparable Rate Data"],
    color: "text-primary",
  },
  {
    icon: FileText,
    title: "Vehicle Valuation",
    description: "Independent market analysis for total loss settlements, pre-purchase evaluations, and fair market pricing. We provide the transparency you need.",
    features: ["Total Loss Data", "Pre-Purchase Analysis", "Comparable Sales Data"],
    color: "text-primary",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-background relative">
      <div 
        className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: `url(${textureBg})`, backgroundSize: 'cover' }}
      />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
            Professional <span className="text-primary">Valuation Services</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We provide the data-driven documentation you need to substantiate your claim.
            Independent, unbiased, and compliant.
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="bg-card/50 border-border backdrop-blur-sm hover:border-primary/50 transition-all duration-300 group flex flex-col h-full">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-background/50 flex items-center justify-center mb-4 border border-border group-hover:scale-110 transition-transform ${service.color}`}>
                  <service.icon size={24} />
                </div>
                <CardTitle className="text-xl font-heading text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 flex-grow">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="text-xs font-medium text-foreground/80 flex items-center gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full ${service.color.replace('text-', 'bg-')}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-2 pt-0 mt-auto">
                <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80 hover:bg-transparent group-hover:translate-x-1 transition-transform">
                  Learn more &rarr;
                </Button>
                {service.disclaimer && (
                  <span className="text-[10px] text-muted-foreground/50">{service.disclaimer}</span>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
