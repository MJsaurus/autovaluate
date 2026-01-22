import { ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 pt-16 pb-8 flex justify-center">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-6 w-6 text-primary" />
              <span className="font-heading font-bold text-xl text-white">
                AUTOSIGNAL <span className="text-primary">GROUP</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Premier automotive valuation and claims assistance services. We provide the data you need to recover what you're owed.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Diminished Value Reports</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Loss of Use Reports</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Total Loss Valuation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Public Adjusting</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Process</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Disclaimer</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 space-y-4">
          <div className="text-[10px] text-muted-foreground/60 space-y-2 text-justify">
            <p className="font-bold text-muted-foreground">IMPORTANT DISCLAIMERS:</p>
            <p>
              <strong>NOT LEGAL ADVICE:</strong> AutoSignal Group is a professional valuation and consulting firm, not a law firm. The information provided on this website and in our reports is for educational and informational purposes only and does not constitute legal advice. No attorney-client relationship is formed by using our services. If you require legal representation, please consult a licensed attorney.
            </p>
            <p>
              <strong>PUBLIC ADJUSTING SERVICES:</strong> Public Adjusting services involving direct negotiation of first-party insurance claims are only provided in jurisdictions where AutoSignal Group holds valid licensure (currently TX). In all other jurisdictions, or for third-party liability claims, our services are limited to appraisal, valuation reporting, and administrative documentation support to assist the vehicle owner in presenting their own claim. We do not negotiate third-party claims.
            </p>
          </div>
          <div className="text-center text-xs text-muted-foreground pt-4">
            &copy; {new Date().getFullYear()} AutoSignal Group Services LLC. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
