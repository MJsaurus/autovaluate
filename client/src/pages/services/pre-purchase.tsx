import { ServicePageLayout } from "@/components/layout/ServicePageLayout";

export default function PrePurchase() {
  return (
    <ServicePageLayout 
      title="Pre-Purchase Market Report"
      price="$249"
      valueProp="Buy with data, not emotion. Get an independent, professional review of any vehicle's listing price before you sign."
      whatYouGet={[
        "Independent Pricing Analysis",
        "Recent Comparable Sales Data",
        "Listing Transparency Review",
        "Market Trend Forecast",
        "Negotiation Data Points"
      ]}
      howItWorks={[
        { title: "Listing Link Submission", desc: "Provide the link or details of the vehicle you are considering." },
        { title: "Blind Data Analysis", desc: "We analyze the market without bias to dealer or seller influence." },
        { title: "Transparency Check", desc: "We look for indicators that the pricing may be misaligned with true market value." },
        { title: "Insight Delivery", desc: "Receive a report showing what you should actually pay." }
      ]}
      whatWeNeed={[
        "Vehicle Listing URL or Specs",
        "Vehicle VIN (if available)",
        "Current Mileage"
      ]}
      faqs={[
        { q: "Is this a mechanical inspection?", a: "No. This is a financial and market analysis. We recommend pairing this with a mechanical PPI." }
      ]}
    />
  );
}
