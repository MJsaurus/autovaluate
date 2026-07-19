import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 bg-background">
      {/* Soft ambient glow, restrained per approved direction */}
      <div className="absolute top-[-180px] right-[-120px] w-[560px] h-[560px] rounded-full ambient-glow pointer-events-none" />

      <div className="container relative z-20 px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent text-primary text-xs font-bold uppercase tracking-wider">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Diminished Value & Total Loss Experts
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold leading-tight text-foreground">
            Even after a flawless repair, <span className="text-gradient-blue">your car is worth less.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
            That's Diminished Value — and if your car was totaled, your insurer's payout may fall short of true replacement cost too. We provide the independent report that proves exactly how much.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="h-14 px-8 text-base font-bold bg-primary hover:bg-primary/90 text-primary-foreground rounded-md border-none btn-glow-primary transition-all" asChild>
              <Link href="/#estimate">
                Get My Free Estimate <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-base font-bold border-border text-foreground hover:bg-secondary rounded-md" asChild>
              <Link href="/#process">
                See How It Works
              </Link>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground pt-2">
            Reviewed and signed by a licensed adjuster &middot; no obligation
          </p>
        </motion.div>

        {/* Sample Valuation Proof Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex justify-center md:justify-end"
        >
          <div className="w-full max-w-sm bg-card p-6 rounded-2xl border border-border shadow-sm space-y-5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Sample Valuation</span>
              <span className="text-xs font-mono text-muted-foreground">VIN &bull;&bull;&bull;&bull;4821</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-border">
              <span className="text-sm text-muted-foreground">Clean market value</span>
              <span className="font-bold text-foreground">$52,000</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-border">
              <span className="text-sm text-muted-foreground">Diminished value</span>
              <span className="font-bold text-destructive">&minus;$12,000</span>
            </div>
            <div className="flex items-center justify-between pt-1">
              <span className="text-sm font-bold text-foreground">Loss in value</span>
              <span className="text-2xl font-bold text-primary">&minus;23%</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
