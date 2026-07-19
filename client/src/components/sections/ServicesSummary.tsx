import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Car, TrendingDown, FileText } from "lucide-react";
import textureBg from "@/assets/texture-bg.png";

const services = [
  {
    icon: TrendingDown,
    title: "Diminished Value Reports",
    description: "Recover the lost market value of your vehicle after an accident. Even with perfect repairs, your car is worth less.",
    href: "/services/diminished-value",
  },
  {
    icon: Car,
    title: "Loss of Use Reports",
    description: "Compensation for the time you were without your vehicle. Comparable rate evidence for your claim.",
    href: "/services/loss-of-use",
  },
  {
    icon: FileText,
    title: "Vehicle Valuation",
    description: "Independent market analysis for total loss settlements and pre-purchase evaluations.",
    href: "/services/pre-purchase",
  },
];

export default function ServicesSummary() {
  return (
    <section id="services" className="py-24 bg-background relative">
      <div 
        className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: `url(${textureBg})`, backgroundSize: 'cover' }}
      />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
            Expert <span className="text-primary">Automotive Services</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Independent, data-driven analysis to substantiate your automotive claims.
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="bg-card/50 border-border backdrop-blur-sm hover:border-primary/50 transition-all duration-300 group flex flex-col h-full" data-testid={`card-service-summary-${service.title.toLowerCase().replace(/ /g, '-')}`}>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-background/50 flex items-center justify-center mb-4 border border-border group-hover:scale-110 transition-transform text-primary">
                  <service.icon size={24} />
                </div>
                <CardTitle className="text-xl font-heading text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
              <CardFooter className="pt-0">
                <Button variant="ghost" asChild className="p-0 h-auto text-primary hover:text-primary/80 hover:bg-transparent group-hover:translate-x-1 transition-transform" data-testid={`button-learn-more-service-${service.title.toLowerCase().replace(/ /g, '-')}`}>
                  <Link href={service.href}>Learn more &rarr;</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
