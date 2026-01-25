import { ServicePageLayout } from "@/components/layout/ServicePageLayout";

export default function LossOfUse() {
  return (
    <ServicePageLayout 
      title="Loss of Use Reports"
      price="$299"
      valueProp="Understanding the market rate for the time your vehicle was undergoing repairs. We provide the market rental data to support your daily rate analysis."
      whatYouGet={[
        "Market Rental Rate Evidence",
        "Comparable Vehicle Availability Data",
        "Repair Duration Verification",
        "Daily Rate Analysis",
        "Market Data Support"
      ]}
      howItWorks={[
        { title: "Repair Timeline Review", desc: "We review the time typically required for your vehicle's specific repairs." },
        { title: "Rental Market Research", desc: "We pull data for comparable vehicles available for rent in your specific zip code." },
        { title: "Daily Rate Analysis", desc: "We establish a fair daily market rate for your vehicle class based on current data." },
        { title: "Final Report Delivery", desc: "Receive your professional LOU information package." }
      ]}
      whatWeNeed={[
        "Repair Facility Records (Start and End dates)",
        "Original Vehicle Trim/Specification",
        "Zip code where the vehicle is primarily used"
      ]}
    />
  );
}
