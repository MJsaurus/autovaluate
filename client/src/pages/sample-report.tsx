import { ShieldCheck, Calendar, FileText, Info, CheckCircle2, AlertTriangle, User, MapPin, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function SampleReport() {
  const currentYear = new Date().getFullYear();

  const sections = [
    { id: "header", title: "Report Summary" },
    { id: "vehicle", title: "Vehicle Identification" },
    { id: "methodology", title: "Valuation Methodology" },
    { id: "market", title: "Comparable Market Data" },
    { id: "certification", title: "Signed Certification" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Report Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 bg-accent/40 p-6 rounded-xl border border-border">
          <div>
            <h1 className="text-2xl font-heading font-bold">Sample Diminished Value Report</h1>
            <p className="text-muted-foreground text-sm">Professional Valuation • Assignment #ASG-2024-001</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="border-border hover:bg-accent">
              Download PDF
            </Button>
            <Button className="bg-primary hover:bg-primary/90">
              Order Your Report
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Navigation Sidebar */}
          <div className="hidden lg:block space-y-2 sticky top-32 h-fit">
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">Report Sections</p>
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="block py-2 px-4 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-all border-l-2 border-transparent hover:border-primary"
              >
                {s.title}
              </a>
            ))}
          </div>

          {/* Report Content */}
          <div className="lg:col-span-3 space-y-12">
            {/* 1. Header & Summary */}
            <section id="header" className="scroll-mt-32">
              <div className="bg-gradient-to-br from-accent/40 to-transparent p-8 rounded-2xl border border-border relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <ShieldCheck size={120} />
                </div>
                
                <div className="flex items-center gap-3 text-primary mb-6">
                  <ShieldCheck size={24} />
                  <span className="font-bold tracking-widest uppercase text-sm">PROFESSIONAL VALUATION REPORT</span>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h2 className="text-4xl font-heading font-bold mb-4">Summary of Value</h2>
                    <div className="space-y-4">
                      <div className="flex justify-between items-baseline py-2 border-b border-border">
                        <span className="text-muted-foreground">Pre-Accident Value</span>
                        <span className="text-xl font-bold">$42,500.00</span>
                      </div>
                      <div className="flex justify-between items-baseline py-2 border-b border-border">
                        <span className="text-muted-foreground">Post-Repair Value</span>
                        <span className="text-xl font-bold text-destructive">$36,200.00</span>
                      </div>
                      <div className="flex justify-between items-baseline py-4">
                        <span className="text-lg font-bold">Total Inherent Diminished Value</span>
                        <span className="text-3xl font-bold text-primary">$6,300.00</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-accent/40 p-6 rounded-xl border border-border">
                    <h3 className="font-bold mb-3 flex items-center gap-2">
                      <Info size={16} className="text-primary" />
                      Executive Conclusion
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed italic">
                      "Based on market analysis of comparable vehicle sales and historical data, the subject vehicle has sustained a significant loss in market appeal and economic value due to documented structural repairs and airbag deployment history."
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 2. Vehicle Identification */}
            <section id="vehicle" className="scroll-mt-32 space-y-6">
              <h2 className="text-2xl font-heading font-bold flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center text-primary text-sm">02</div>
                Vehicle Identification
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: Calendar, label: "Year", value: "2023" },
                  { icon: FileText, label: "Make/Model", value: "BMW X5 xDrive40i" },
                  { icon: Gauge, label: "Mileage", value: "12,450" },
                  { icon: MapPin, label: "Location", value: "Dallas, TX" },
                  { icon: Info, label: "VIN", value: "5UXCR6C0XP9XXXXXX" },
                  { icon: CheckCircle2, label: "Condition", value: "Excellent (Pre-Loss)" },
                  { icon: AlertTriangle, label: "Impact Severity", value: "Moderate / Structural" },
                  { icon: User, label: "Client", value: "Jane Smith" },
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-xl bg-accent/40 border border-border">
                    <item.icon size={16} className="text-primary mb-2" />
                    <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="font-bold text-sm">{item.value}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 3. Methodology */}
            <section id="methodology" className="scroll-mt-32 space-y-6">
              <h2 className="text-2xl font-heading font-bold flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center text-primary text-sm">03</div>
                Valuation Methodology
              </h2>
              <div className="prose max-w-none text-muted-foreground">
                <p>
                  This report utilizes the <strong>Market Data Comparison Approach</strong>. 
                  Our analysis bypasses industry "shortcuts" like the 17c formula, instead focusing on real-world market behavior:
                </p>
                <div className="grid md:grid-cols-3 gap-6 my-8">
                  <div className="space-y-2">
                    <div className="text-foreground font-bold text-sm">Pre-Accident Analysis</div>
                    <p className="text-xs">Analysis of non-accident vehicles in the same market to establish a baseline Fair Market Value.</p>
                  </div>
                  <div className="space-y-2">
                    <div className="text-foreground font-bold text-sm">Historical Stigma Analysis</div>
                    <p className="text-xs">Applying depreciation coefficients based on damage severity, repair quality, and airbag status.</p>
                  </div>
                  <div className="space-y-2">
                    <div className="text-foreground font-bold text-sm">Market Comp Verification</div>
                    <p className="text-xs">Verifying adjusted values against actual dealer trade-in data for vehicles with similar history.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 4. Market Data */}
            <section id="market" className="scroll-mt-32 space-y-6">
              <h2 className="text-2xl font-heading font-bold flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center text-primary text-sm">04</div>
                Comparable Market Data
              </h2>
              <div className="overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-sm text-left">
                  <thead className="bg-accent/60 text-xs font-bold uppercase tracking-widest">
                    <tr>
                      <th className="px-6 py-4">Comp #</th>
                      <th className="px-6 py-4">Description</th>
                      <th className="px-6 py-4">Mileage</th>
                      <th className="px-6 py-4">Location</th>
                      <th className="px-6 py-4">Sold Price</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { id: "01", desc: "2023 BMW X5 (No History)", miles: "11,200", loc: "Plano, TX", price: "$43,900" },
                      { id: "02", desc: "2023 BMW X5 (No History)", miles: "14,500", loc: "Dallas, TX", price: "$42,100" },
                      { id: "03", desc: "2022 BMW X5 (Prior Frame)", miles: "15,100", loc: "Houston, TX", price: "$35,400" },
                      { id: "04", desc: "2023 BMW X5 (Accident)", miles: "13,800", loc: "Fort Worth, TX", price: "$36,800" },
                    ].map((comp, i) => (
                      <tr key={i} className="hover:bg-accent/40 transition-colors">
                        <td className="px-6 py-4 font-mono text-primary">{comp.id}</td>
                        <td className="px-6 py-4 font-medium text-foreground">{comp.desc}</td>
                        <td className="px-6 py-4 text-muted-foreground">{comp.miles}</td>
                        <td className="px-6 py-4 text-muted-foreground">{comp.loc}</td>
                        <td className="px-6 py-4 font-bold text-foreground">{comp.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* 5. Certification */}
            <section id="certification" className="scroll-mt-32 space-y-6">
              <div className="p-8 rounded-2xl bg-accent/40 border border-border border-dashed">
                <h2 className="text-2xl font-heading font-bold mb-6">Analysis Certification</h2>
                <div className="space-y-4 text-sm text-muted-foreground italic mb-8">
                  <p>We certify that, to the best of our knowledge and belief:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>The statements of fact contained in this report are based on professional data analysis.</li>
                    <li>The reported analyses, opinions, and conclusions are limited only by the reported assumptions and limiting conditions and are our independent professional analyses.</li>
                    <li>We have no present or prospective interest in the property that is the subject of this report.</li>
                  </ul>
                </div>
                
                <div className="flex flex-col md:flex-row justify-between items-end gap-8 pt-8 border-t border-border">
                  <div className="space-y-1">
                    <div className="w-64 h-12 border-b-2 border-primary mb-2 flex items-end">
                      <span className="font-heading italic text-xl">AutoValuate</span>
                    </div>
                    <p className="text-xs font-bold text-foreground uppercase tracking-widest">Authorized Signature</p>
                    <p className="text-[10px] text-muted-foreground">AutoValuate Services LLC</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold text-foreground uppercase tracking-widest mb-1">Date of Valuation</p>
                    <p className="text-xl font-bold">{new Date().toLocaleDateString()}</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
