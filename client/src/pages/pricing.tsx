import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { pricingData } from "@/components/sections/PricingSection";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
              Full <span className="text-primary">Pricing</span>
            </h1>
            <p className="text-muted-foreground text-xl">
              Professional valuation services with clear, upfront pricing.
            </p>
          </div>

          <div className="glass-card rounded-2xl border border-white/10 overflow-hidden mb-16">
            <Table>
              <TableHeader className="bg-white/5">
                <TableRow className="border-white/10">
                  <TableHead className="text-white font-bold py-6 px-8">Service</TableHead>
                  <TableHead className="text-white font-bold py-6 px-8 text-right">Price</TableHead>
                  <TableHead className="text-white font-bold py-6 px-8 text-center">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pricingData.map((item) => (
                  <TableRow key={item.name} className="border-white/10 hover:bg-white/5 transition-colors">
                    <TableCell className="py-8 px-8 align-top">
                      <div className="space-y-2">
                        <p className="text-xl font-bold text-white">{item.name}</p>
                        <p className="text-sm text-muted-foreground">{item.features.join(", ")}</p>
                      </div>
                    </TableCell>
                    <TableCell className="py-8 px-8 text-right align-top">
                      <span className="text-2xl font-bold text-primary">{item.price}</span>
                    </TableCell>
                    <TableCell className="py-8 px-8 text-center align-top">
                      <Button asChild className="bg-primary hover:bg-primary/90">
                        <Link href="/contact">Start Intake</Link>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow className="border-white/10 hover:bg-white/5 transition-colors">
                  <TableCell className="py-8 px-8 align-top">
                    <div className="space-y-2">
                      <p className="text-xl font-bold text-white">Public Adjuster Fee (Texas)</p>
                      <p className="text-sm text-muted-foreground">First-party claims only. Subject to licensing. Maximum allowed by law.</p>
                    </div>
                  </TableCell>
                  <TableCell className="py-8 px-8 text-right align-top">
                    <span className="text-2xl font-bold text-primary">10%</span>
                    <p className="text-[10px] text-muted-foreground mt-1">of total recovery</p>
                  </TableCell>
                  <TableCell className="py-8 px-8 text-center align-top">
                    <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
                      <Link href="/contact">Request Consultation</Link>
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-heading font-bold text-white text-center">Pricing FAQ</h2>
            <div className="grid gap-6">
              <div className="glass-card p-6 rounded-xl border border-white/5">
                <h3 className="text-lg font-bold text-white mb-2">Are there any hidden fees?</h3>
                <p className="text-muted-foreground">No. Our report fees are flat-rate. If additional on-site inspections are required, they will be quoted separately before any work begins.</p>
              </div>
              <div className="glass-card p-6 rounded-xl border border-white/5">
                <h3 className="text-lg font-bold text-white mb-2">When do I pay?</h3>
                <p className="text-muted-foreground">Fees for reports are due upon ordering. Public adjusting fees are contingency-based and collected upon successful recovery.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
