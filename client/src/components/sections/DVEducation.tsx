import { TrendingDown } from "lucide-react";

export default function DVEducation() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground leading-tight">
              How an accident lowers <br />
              <span className="text-primary">your car's value</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Before anyone buys a used car, they check its history. The moment a reported accident shows up, the vehicle's market value drops — even if the repair is invisible. A documented structural repair can remove 20–25% of a vehicle's market value.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              That loss becomes real the moment you trade in, resell, or settle a claim. Diminished Value is the difference — and you may be entitled to recover it.
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl border border-border shadow-sm space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
              <TrendingDown className="h-4 w-4 text-primary" />
              Sample Dealer Trade-In Quote
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-baseline py-3 border-b border-border">
                <span className="text-muted-foreground">Market value</span>
                <span className="text-xl font-bold text-foreground">$52,000</span>
              </div>
              <div className="flex justify-between items-baseline py-3 border-b border-border">
                <span className="text-muted-foreground">Reported accident history</span>
                <span className="text-xl font-bold text-destructive">&minus;$12,000</span>
              </div>
              <div className="flex justify-between items-baseline py-3">
                <span className="font-bold text-foreground">Dealer's offer to you</span>
                <span className="text-2xl font-bold text-primary">$40,000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
