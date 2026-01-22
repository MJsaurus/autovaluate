import { ServicePageLayout } from "@/components/layout/ServicePageLayout";

export default function DiminishedValue() {
  return (
    <ServicePageLayout 
      title="Diminished Value Reports"
      price="$299"
      valueProp="Recover the lost market value of your vehicle after an accident. We provide the professional documentation you need to prove your car's true value."
      whatYouGet={[
        "USPAP Compliant Appraisal Report",
        "Comparable Sales Market Analysis",
        "Detailed Vehicle History Review",
        "Physical Damage/Repair Quality Analysis",
        "Expert Signature & Credentials"
      ]}
      howItWorks={[
        { title: "Vehicle Assessment", desc: "We review your repair estimates, vehicle history, and condition photos." },
        { title: "Market Data Sourcing", desc: "Our team identifies comparable 'clean' vehicles and calculates the valuation gap." },
        { title: "Report Drafting", desc: "We compile a comprehensive report documenting the exact dollar amount of value lost." },
        { title: "Claim Submission", desc: "You receive your final report to submit to the insurance carrier." }
      ]}
      whatWeNeed={[
        "Final Repair Estimate/Invoice",
        "Photos of the vehicle (pre and post repair if available)",
        "VIN and Mileage at time of accident",
        "Accident Date and Location"
      ]}
      faqs={[
        { q: "What is Inherent Diminished Value?", a: "It is the automatic loss in value simply because a vehicle now has an accident history, regardless of repair quality." },
        { q: "Can I claim DV if I wasn't at fault?", a: "Yes, this is a standard third-party claim against the at-fault driver's insurance in most states." }
      ]}
    />
  );
}
