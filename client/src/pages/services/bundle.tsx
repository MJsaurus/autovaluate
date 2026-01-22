import { ServicePageLayout } from "@/components/layout/ServicePageLayout";

export default function Bundle() {
  return (
    <ServicePageLayout 
      title="DV + LOU Bundle"
      price="$499"
      valueProp="Our most comprehensive valuation package. Document both the lost value of your car and the loss of its use during repairs."
      whatYouGet={[
        "Full Diminished Value Report ($299 value)",
        "Full Loss of Use Report ($299 value)",
        "Combined Market Data Analysis",
        "Priority Expert Review",
        "Significant $99 Savings"
      ]}
      howItWorks={[
        { title: "Unified Intake", desc: "Submit your information once for both reports." },
        { title: "Parallel Analysis", desc: "Our team works on both the valuation and rental market data simultaneously." },
        { title: "Quality Audit", desc: "A senior appraiser reviews the combined data for consistency." },
        { title: "Complete Packet", desc: "Receive two distinct reports ready for claim submission." }
      ]}
      whatWeNeed={[
        "All Repair Estimates & Invoices",
        "Repair Timeline Details",
        "Vehicle VIN & Specific Options",
        "Photos and Accident Information"
      ]}
    />
  );
}
