import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Tell Us What Happened",
    description: "Submit your vehicle and accident details, or your insurer's total loss offer. Takes about a minute."
  },
  {
    number: "02",
    title: "We Analyze the Market",
    description: "Our team compares real market data and comparable sales to calculate your documented loss — no obligation."
  },
  {
    number: "03",
    title: "Get Your Signed Report",
    description: "Receive a comprehensive report, reviewed and signed by a licensed adjuster, ready to submit."
  }
];

export default function HowItWorks() {
  return (
    <section id="process" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground leading-tight">
              A Data-Driven <br />
              <span className="text-primary">Valuation Process</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Understanding vehicle valuation can be complex. We simplify the process with professional analysis based on real market evidence.
            </p>
            
            <div className="space-y-6">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-border bg-background flex items-center justify-center text-lg font-bold font-heading text-muted-foreground group-hover:border-primary/50 group-hover:text-primary transition-colors">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            {/* Professional Data Visualization */}
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full opacity-20" />
            <div className="relative glass-card p-10 rounded-2xl border-border shadow-2xl flex flex-col items-center justify-center min-h-[400px]">
              <div className="w-full flex justify-between items-center mb-12">
                <div className="h-2 w-24 bg-primary/40 rounded-full" />
                <div className="flex gap-2">
                  <div className="h-2 w-2 bg-muted rounded-full" />
                  <div className="h-2 w-2 bg-muted rounded-full" />
                </div>
              </div>
              
              <div className="relative w-48 h-48 mb-8">
                <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="currentColor"
                    strokeWidth="8"
                    className="text-muted"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="currentColor"
                    strokeWidth="8"
                    strokeDasharray="251.2"
                    strokeDashoffset="62.8"
                    className="text-primary"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center rotate-90">
                  <span className="text-3xl font-bold text-foreground">75%</span>
                  <span className="text-[10px] text-muted-foreground uppercase tracking-widest">Market Alignment</span>
                </div>
              </div>

              <div className="w-full space-y-3">
                <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-4/5 bg-primary/60" />
                </div>
                <div className="flex justify-between text-[10px] text-muted-foreground font-mono uppercase tracking-tighter">
                  <span>Data Precision</span>
                  <span>Verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
