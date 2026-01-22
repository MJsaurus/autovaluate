import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Free Consultation",
    description: "Submit your vehicle details and accident information. We'll review your case to determine if you have a viable claim."
  },
  {
    number: "02",
    title: "Data Analysis",
    description: "Our experts analyze market data, repair estimates, and comparable vehicle sales to calculate precise values."
  },
  {
    number: "03",
    title: "Report Generation",
    description: "We produce a comprehensive, USPAP-compliant report documenting your loss with supporting evidence."
  },
  {
    number: "04",
    title: "Claim Support",
    description: "Receive guidance on how to present your report to the insurance company to demand fair compensation."
  }
];

export default function HowItWorks() {
  return (
    <section id="process" className="py-24 bg-card/30 border-y border-white/5">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white leading-tight">
              A Proven Process for <br />
              <span className="text-primary">Maximum Recovery</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Navigating insurance claims can be complex. We simplify the process with professional documentation that demands attention.
            </p>
            
            <div className="space-y-6">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-white/10 bg-background flex items-center justify-center text-lg font-bold font-heading text-muted-foreground group-hover:border-primary/50 group-hover:text-primary transition-colors">
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
            {/* Visual representation of a report */}
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full opacity-20" />
            <div className="relative glass-card p-8 rounded-2xl border-white/10 shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
                <div className="h-4 w-32 bg-white/10 rounded" />
                <div className="h-8 w-8 rounded-full bg-primary/20" />
              </div>
              <div className="space-y-4">
                <div className="h-4 w-3/4 bg-white/5 rounded" />
                <div className="h-4 w-full bg-white/5 rounded" />
                <div className="h-4 w-5/6 bg-white/5 rounded" />
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="h-24 bg-white/5 rounded border border-white/5 flex flex-col justify-center items-center">
                    <span className="text-xs text-muted-foreground uppercase mb-1">Pre-Loss Value</span>
                    <span className="text-xl font-mono font-bold text-white">$45,200</span>
                  </div>
                  <div className="h-24 bg-primary/10 rounded border border-primary/20 flex flex-col justify-center items-center">
                    <span className="text-xs text-primary uppercase mb-1">Diminished Value</span>
                    <span className="text-xl font-mono font-bold text-primary">$6,850</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
