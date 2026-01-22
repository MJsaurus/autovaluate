import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Shield, ClipboardCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import heroBg from "@/assets/hero-bg.png";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/40 z-10" />
        <img
          src={heroBg}
          alt="Luxury automotive detail"
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      <div className="container relative z-20 px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Independent Valuation Experts
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold leading-tight text-white">
            Professional <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
              Vehicle Valuation
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
            Independent, data-driven analysis for automotive claims and purchase decisions. Professional documentation backed by industry expertise.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="h-14 px-8 text-base font-bold bg-primary hover:bg-primary/90 rounded-none md:rounded-md border border-primary/50 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all" asChild>
              <Link href="/contact">
                Start Free Evaluation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-base font-bold border-white/20 text-white hover:bg-white/10 hover:text-white hover:border-white/40 rounded-none md:rounded-md backdrop-blur-sm" asChild>
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
          <div className="glass-card p-5 rounded-xl border border-white/10 flex items-center gap-4 hover:border-primary/50 transition-colors group">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <BarChart3 size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Independent Market Analysis</h3>
              <p className="text-xs text-muted-foreground">Data-driven valuations based on real-world vehicle markets.</p>
            </div>
          </div>

          <div className="glass-card p-5 rounded-xl border border-white/10 flex items-center gap-4 hover:border-primary/50 transition-colors group">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <Shield size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Claims & Purchase Valuation</h3>
              <p className="text-xs text-muted-foreground">Reports for insurance claims, total loss, and purchase decisions.</p>
            </div>
          </div>

          <div className="glass-card p-5 rounded-xl border border-white/10 flex items-center gap-4 hover:border-primary/50 transition-colors group">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <ClipboardCheck size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Professional Documentation</h3>
              <p className="text-xs text-muted-foreground">Clear, defensible reports designed to support informed decisions.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
