import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car, TrendingDown, Scale, FileText } from "lucide-react";
import textureBg from "@/assets/texture-bg.png";

const services = [
  {
    icon: TrendingDown,
    title: "Diminished Value Reports",
    description: "Recover the lost market value of your vehicle after an accident. Even with perfect repairs, your car is worth less. We prove it.",
    features: ["Market Analysis", "Repair Quality Assessment", "USPAP Compliant"],
    color: "text-slate-400",
  },
  {
    icon: Car,
    title: "Loss of Use Reports",
    description: "Compensation for the time you were without your vehicle. Get paid for the daily rental rate of a comparable luxury vehicle.",
    features: ["Daily Rate Analysis", "Duration Verification", "Case Law Support"],
    color: "text-slate-400",
  },
  {
    icon: FileText,
    title: "Vehicle Valuation",
    description: "Independent market analysis for total loss settlements, divorce, estate, or high-value asset appraisals.",
    features: ["Total Loss Negotiation", "Fair Market Value", "Collector Cars"],
    color: "text-slate-400",
  },
  {
    icon: Scale,
    title: "Public Adjusting",
    description: "Licensed representation for first-party insurance claims. We handle the negotiation so you don't have to.",
    features: ["First-Party Claims Only", "Negotiation Support", "Policy Review"],
    disclaimer: "*Subject to jurisdiction & licensing",
    color: "text-slate-400",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-background relative">
      <div 
        className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: `url(${textureBg})`, backgroundSize: 'cover' }}
      />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white">
            Professional <span className="text-primary">Valuation Services</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We provide the data-driven documentation you need to substantiate your claim.
            Independent, unbiased, and compliant.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="bg-card/50 border-white/5 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 group flex flex-col h-full">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-background/50 flex items-center justify-center mb-4 border border-white/10 group-hover:scale-110 transition-transform ${service.color}`}>
                  <service.icon size={24} />
                </div>
                <CardTitle className="text-xl font-heading text-white">{service.title}</CardTitle>
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
