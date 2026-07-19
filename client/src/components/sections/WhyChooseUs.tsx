import { Shield, Award, Users, Search } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute bottom-[-180px] right-[-140px] w-[560px] h-[560px] rounded-full ambient-glow pointer-events-none" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Independent, and <span className="text-primary">on your side</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We aren't just report generators. We are automotive industry experts with decades of experience in valuation, repair, and claims handling.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center space-y-4 p-6 rounded-lg bg-card border border-border shadow-sm hover:border-primary/40 hover:shadow-md transition-all">
            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
              <Shield size={32} />
            </div>
            <h3 className="text-xl font-heading font-bold text-foreground">Independent</h3>
            <p className="text-sm text-muted-foreground">We work for you, not the insurance company. Our reports are objective and independent.</p>
          </div>

          <div className="text-center space-y-4 p-6 rounded-lg bg-card border border-border shadow-sm hover:border-primary/40 hover:shadow-md transition-all">
            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
              <Users size={32} />
            </div>
            <h3 className="text-xl font-heading font-bold text-foreground">Adjuster-Signed</h3>
            <p className="text-sm text-muted-foreground">Every report is reviewed and signed by a licensed adjuster before it reaches your hands.</p>
          </div>

          <div className="text-center space-y-4 p-6 rounded-lg bg-card border border-border shadow-sm hover:border-primary/40 hover:shadow-md transition-all">
            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
              <Search size={32} />
            </div>
            <h3 className="text-xl font-heading font-bold text-foreground">Data-Driven</h3>
            <p className="text-sm text-muted-foreground">We use real market data and comparable sales, not generic algorithms or "book values."</p>
          </div>

          <div className="text-center space-y-4 p-6 rounded-lg bg-card border border-border shadow-sm hover:border-primary/40 hover:shadow-md transition-all">
            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
              <Award size={32} />
            </div>
            <h3 className="text-xl font-heading font-bold text-foreground">Transparent</h3>
            <p className="text-sm text-muted-foreground">Flat pricing, and no charge if we find no meaningful lost value.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
