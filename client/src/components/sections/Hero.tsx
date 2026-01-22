import { Button } from "@/components/ui/button";
import { ArrowRight, FileCheck, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
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
            Maximize Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-200">
              Claim Value
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
            Professional Diminished Value and Loss of Use reports backed by data. 
            Don't settle for the insurance company's first offer.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="h-14 px-8 text-base font-bold bg-primary hover:bg-primary/90 rounded-none md:rounded-md border border-primary/50 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all" asChild>
              <a href="#contact">
                Start Free Evaluation <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-base font-bold border-white/20 text-white hover:bg-white/10 hover:text-white hover:border-white/40 rounded-none md:rounded-md backdrop-blur-sm" asChild>
              <a href="#services">
                Explore Services
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Hero Stats/Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="hidden md:flex flex-col gap-6 justify-center pl-10"
        >
          <div className="glass-card p-6 rounded-xl border border-white/10 relative overflow-hidden group hover:border-primary/50 transition-colors">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <TrendingUp size={80} />
            </div>
            <h3 className="text-3xl font-heading font-bold text-white mb-1">$4,500+</h3>
            <p className="text-sm text-muted-foreground uppercase tracking-wider">Avg. Diminished Value Recovery</p>
          </div>

          <div className="glass-card p-6 rounded-xl border border-white/10 relative overflow-hidden group hover:border-primary/50 transition-colors">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <FileCheck size={80} />
            </div>
            <h3 className="text-3xl font-heading font-bold text-white mb-1">100%</h3>
            <p className="text-sm text-muted-foreground uppercase tracking-wider">USPAP Compliant Reports</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
