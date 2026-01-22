import { ServicePageLayout } from "@/components/layout/ServicePageLayout";

export default function LossOfUse() {
  return (
    <ServicePageLayout 
      title="Loss of Use Reports"
      price="$299"
      valueProp="Compensation for the time your vehicle was in the shop. We provide the market rental data to substantiate your daily rate demand."
      whatYouGet={[
        "Market Rental Rate Evidence",
        "Comparable Vehicle Availability Data",
        "Repair Duration Verification",
        "Daily Rate Calculation Analysis",
        "Support Documentation"
      ]}
      howItWorks={[
        { title: "Repair Timeline Review", desc: "We verify the reasonable time required for your vehicle's specific repairs." },
        { title: "Rental Market Research", desc: "We pull data for comparable vehicles available for rent in your specific zip code." },
        { title: "Daily Rate Benchmarking", desc: "We establish the fair daily market rate for your vehicle class." },
        { title: "Final Report Delivery", desc: "Receive your professional LOU demand packet." }
      ]}
      whatWeNeed={[
        "Repair Facility Records (Start and End dates)",
        "Original Vehicle Trim/Specification",
        "Zip code where the vehicle is primarily used"
      ]}
    />
  );
}
