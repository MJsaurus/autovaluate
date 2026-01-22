import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const pricingData = [
  {
    name: "Diminished Value Report",
    price: "$299",
    href: "/services/diminished-value",
    features: ["USPAP Compliant Report", "Market Analysis", "Repair Quality Review"]
  },
  {
    name: "Loss of Use Report",
    price: "$299",
    href: "/services/loss-of-use",
    features: ["Daily Rate Evidence", "Comparable Data", "Documentation Support"]
  },
  {
    name: "DV + LOU Bundle",
    price: "$499",
    href: "/services/bundle",
    features: ["Combined Market Evidence", "Priority Handling", "Discounted Bundle Rate"]
  },
  {
    name: "Pre-Purchase Report",
    price: "$249",
    href: "/services/pre-purchase",
    features: ["Independent Pricing Review", "Comparable Sales Data", "Transparency Analysis"]
  }
];

export default function PricingSection() {
  return (
    <section className="py-24 bg-card/30 border-y border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
            Transparent <span className="text-primary">Pricing</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Professional reports with flat-rate pricing. No surprises, just data-driven results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingData.map((plan) => (
            <div key={plan.name} className="glass-card p-8 rounded-2xl border border-white/10 flex flex-col h-full hover:border-primary/50 transition-colors" data-testid={`card-pricing-${plan.name.toLowerCase().replace(/ /g, '-')}`}>
              <h3 className="text-xl font-heading font-bold text-white mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary" /> {f}
                  </li>
                ))}
              </ul>
              <Button asChild className="w-full bg-primary hover:bg-primary/90" data-testid={`button-learn-more-${plan.name.toLowerCase().replace(/ /g, '-')}`}>
                <Link href={plan.href}>Learn More</Link>
              </Button>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" asChild className="border-primary text-primary hover:bg-primary/10">
            <Link href="/pricing">View All Pricing & Details</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
