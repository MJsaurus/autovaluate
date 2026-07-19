import { Gauge } from "lucide-react";

export default function TotalLossEducation() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="glass-card p-8 rounded-2xl border border-border shadow-sm space-y-6 order-2 lg:order-1">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
              <Gauge className="h-4 w-4 text-primary" />
              Replacement Cost Analysis
            </div>
            <div className="space-y-5">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Insurer's offer</span>
                  <span className="font-bold text-destructive">$18,400</span>
                </div>
                <div className="h-2.5 w-full bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-destructive/60 rounded-full" style={{ width: "80%" }} />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Market average to replace</span>
                  <span className="font-bold text-primary">$22,900</span>
                </div>
                <div className="h-2.5 w-full bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: "100%" }} />
                </div>
              </div>
            </div>
            <div className="pt-4 border-t border-border text-center">
              <span className="text-sm text-muted-foreground">Difference: </span>
              <span className="font-bold text-foreground">$4,500 below market (&minus;20%)</span>
            </div>
          </div>

          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground leading-tight">
              When your car is totaled, <br />
              <span className="text-primary">the insurer decides what it was worth</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              After a total loss, the insurance company sets your payout based on their own valuation — often below what it actually costs to replace your car with a comparable one.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              An independent valuation shows what the real market says, backed by comparable listings for vehicles like yours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
