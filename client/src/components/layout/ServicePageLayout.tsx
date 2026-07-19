import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function ServicePageLayout({ 
  title, 
  price, 
  valueProp, 
  whatYouGet, 
  howItWorks, 
  whatWeNeed, 
  disclaimer,
  faqs 
}: any) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground leading-tight">
                  {title}
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  {valueProp}
                </p>
              </motion.div>

              <div className="space-y-6">
                <h2 className="text-2xl font-heading font-bold text-foreground flex items-center gap-2">
                  What You Get
                </h2>
                <ul className="grid md:grid-cols-2 gap-4">
                  {whatYouGet.map((item: string) => (
                    <li key={item} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-8">
                <h2 className="text-2xl font-heading font-bold text-foreground">How It Works</h2>
                <div className="space-y-6">
                  {howItWorks.map((step: any, i: number) => (
                    <div key={i} className="flex gap-6">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center font-bold text-primary">
                        {i + 1}
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-lg font-bold text-foreground">{step.title}</h4>
                        <p className="text-muted-foreground">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card p-8 rounded-2xl border border-primary/20 bg-primary/5">
                <h2 className="text-2xl font-heading font-bold text-foreground mb-6">What we need from you</h2>
                <ul className="space-y-3">
                  {whatWeNeed.map((item: string) => (
                    <li key={item} className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {faqs && (
                <div className="space-y-8">
                  <h2 className="text-2xl font-heading font-bold text-foreground">Specific FAQ</h2>
                  <div className="space-y-6">
                    {faqs.map((faq: any, i: number) => (
                      <div key={i} className="space-y-2">
                        <h4 className="text-lg font-bold text-foreground">{faq.q}</h4>
                        <p className="text-muted-foreground">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="p-4 bg-accent/40 border border-border rounded-lg text-xs text-muted-foreground italic">
                {disclaimer || "Disclaimer: AutoValuate is an independent valuation firm. This service provides data-driven documentation and does not constitute legal advice or formal appraisal services."}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-6">
                <div className="glass-card p-8 rounded-2xl border border-primary/30 shadow-2xl bg-background/50">
                  <div className="text-center space-y-4 mb-8">
                    <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Service Price</p>
                    <div className="text-5xl font-bold text-foreground">{price}</div>
                    <p className="text-xs text-muted-foreground">Flat-rate professional valuation</p>
                  </div>
                  <div className="space-y-4">
                    <Button asChild className="w-full h-14 text-lg font-bold bg-primary hover:bg-primary/90">
                      <Link href="/contact">Start Your Intake <ArrowRight className="ml-2 h-5 w-5" /></Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full h-12 border-border text-foreground hover:bg-accent">
                      <Link href="/pricing">View All Pricing</Link>
                    </Button>
                  </div>
                  <div className="mt-8 pt-6 border-t border-border">
                    <p className="text-[10px] text-muted-foreground text-center">
                      *Not legal advice. Independent valuation reports are provided for informational and documentation purposes only.
                    </p>
                  </div>
                </div>
                
                <div className="glass-card p-6 rounded-xl border border-border space-y-2">
                  <h4 className="font-bold text-foreground">No Meaningful Loss? No Charge.</h4>
                  <p className="text-sm text-muted-foreground">If our analysis doesn't support a meaningful loss, you won't be charged for the report.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
