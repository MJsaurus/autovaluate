import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Shield, ClipboardCheck } from "lucide-react";
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
            Independent Valuation Experts
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold leading-tight text-foreground">
            Prove what your <span className="text-gradient-blue">vehicle</span> is actually worth.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
            Independent, data-driven analysis for automotive claims and purchase decisions. Professional documentation backed by industry expertise.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="h-14 px-8 text-base font-bold bg-primary hover:bg-primary/90 text-primary-foreground rounded-md border-none btn-glow-primary transition-all" asChild>
              <Link href="/contact">
                Start Free Evaluation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-base font-bold border-border text-foreground hover:bg-secondary rounded-md" asChild>
              <Link href="/services/diminished-value">
                Explore Services
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Hero Credibility Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="hidden md:flex flex-col gap-4 justify-center pl-10"
        >
          <div className="bg-card p-5 rounded-xl border border-border flex items-center gap-4 hover:border-primary/40 transition-colors group shadow-sm">
            <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <BarChart3 size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground">Independent Market Analysis</h3>
              <p className="text-xs text-muted-foreground">Data-driven valuations based on real-world vehicle markets.</p>
            </div>
          </div>

          <div className="bg-card p-5 rounded-xl border border-border flex items-center gap-4 hover:border-primary/40 transition-colors group shadow-sm">
            <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <Shield size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground">Claims & Purchase Valuation</h3>
              <p className="text-xs text-muted-foreground">Reports for insurance claims, total loss, and purchase decisions.</p>
            </div>
          </div>

          <div className="bg-card p-5 rounded-xl border border-border flex items-center gap-4 hover:border-primary/40 transition-colors group shadow-sm">
            <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <ClipboardCheck size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground">Professional Documentation</h3>
              <p className="text-xs text-muted-foreground">Clear, defensible reports designed to support informed decisions.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
