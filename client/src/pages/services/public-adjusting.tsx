import { ServicePageLayout } from "@/components/layout/ServicePageLayout";

export default function PublicAdjusting() {
  return (
    <ServicePageLayout 
      title="Public Adjusting"
      price="10% Fee"
      valueProp="Expert representation for first-party insurance claims. We handle the process from start to finish to ensure your policy is honored."
      whatYouGet={[
        "Licensed Policy Interpretation",
        "Direct Insurance Negotiation",
        "Comprehensive Damage Appraisal",
        "Claim Management & Support",
        "First-Party Recovery Experts"
      ]}
      howItWorks={[
        { title: "Policy Review", desc: "We analyze your insurance policy to determine full coverage potential." },
        { title: "Site Inspection", desc: "A licensed adjuster performs a detailed inspection of the vehicle damage." },
        { title: "Direct Negotiation", desc: "We present the claim directly to the carrier and handle all communication." },
        { title: "Settlement Review", desc: "We review the final offer for adequacy before you accept." }
      ]}
      whatWeNeed={[
        "Your Insurance Policy Declaration Page",
        "Full Claim Details & Correspondence",
        "Access to the Vehicle"
      ]}
      disclaimer="Public Adjusting services for first-party claims are only provided in TX (License #XXXX). Subject to licensing and jurisdiction. Fee is 10% of total recovery (Texas maximum)."
      faqs={[
        { q: "Do you handle third-party claims?", a: "No. Public adjusters are licensed for first-party claims (claims against your own policy) only." }
      ]}
    />
  );
}
