import { ServicePageLayout } from "@/components/layout/ServicePageLayout";

export default function TotalLoss() {
  return (
    <ServicePageLayout
      title="Total Loss Valuation Reports"
      price="$299"
      valueProp="When your car is totaled, the insurer sets the number first. We provide an independent replacement-cost analysis showing what your vehicle is actually worth in today's market."
      whatYouGet={[
        "Independent Replacement-Cost Analysis",
        "Comparable Listings Market Data",
        "Total Loss Settlement Review",
        "Documented Valuation Report",
        "Reviewed & Signed by a Licensed Adjuster"
      ]}
      howItWorks={[
        { title: "Offer & Vehicle Review", desc: "We review your insurer's total loss offer alongside your vehicle's specifications and condition." },
        { title: "Comparable Market Sourcing", desc: "We identify comparable vehicles currently for sale matching your year, make, model, and condition." },
        { title: "Replacement Cost Analysis", desc: "We calculate what it actually costs to replace your vehicle with a true comparable." },
        { title: "Signed Report Delivery", desc: "Receive your report, reviewed and signed by a licensed adjuster, ready to submit." }
      ]}
      whatWeNeed={[
        "Insurer's Total Loss Settlement Offer",
        "Vehicle Year, Make, Model, and Trim",
        "Mileage and Condition Details",
        "VIN"
      ]}
      faqs={[
        { q: "How is the replacement cost calculated?", a: "We source real, currently-listed comparable vehicles in your market and compare them against the insurer's valuation to identify the gap." },
        { q: "Will the insurer accept an independent valuation?", a: "Many insurers will review supplemental data. Your report is formatted to be submitted directly to support a higher settlement." }
      ]}
    />
  );
}
