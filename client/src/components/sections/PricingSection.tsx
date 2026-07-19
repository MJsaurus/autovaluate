import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const pricingData = [
  {
    name: "Diminished Value Report",
    price: "$299",
    href: "/services/diminished-value",
    features: ["Independent Market Valuation", "Comparable Sales Analysis", "Reviewed & Signed by a Licensed Adjuster"]
  },
  {
    name: "Total Loss Report",
    price: "$299",
    href: "/services/total-loss",
    features: ["Replacement-Cost Market Analysis", "Comparable Listings Evidence", "Reviewed & Signed by a Licensed Adjuster"]
  }
];

export default function PricingSection() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute top-[-160px] left-[-120px] w-[500px] h-[500px] rounded-full ambient-glow pointer-events-none" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Transparent <span className="text-primary">Pricing</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            One flat fee per report. No charge if we find no meaningful lost value.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {pricingData.map((plan) => (
            <div key={plan.name} className="glass-card p-8 rounded-2xl border border-border shadow-sm flex flex-col h-full hover:border-primary/50 hover:shadow-md transition-all" data-testid={`card-pricing-${plan.name.toLowerCase().replace(/ /g, '-')}`}>
              <h3 className="text-xl font-heading font-bold text-foreground mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">{plan.price}</span>
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
