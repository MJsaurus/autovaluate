import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-card/20">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white text-center mb-12">
          Frequently Asked <span className="text-primary">Questions</span>
        </h2>

        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="item-1" className="border-white/10">
            <AccordionTrigger className="text-lg font-medium text-white hover:text-primary hover:no-underline">
              What is Diminished Value (DV)?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              Diminished Value is the loss in market value a vehicle suffers after an accident, even if it has been perfectly repaired. A vehicle with an accident history is simply worth less than one without. You are entitled to be compensated for this difference in value.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border-white/10">
            <AccordionTrigger className="text-lg font-medium text-white hover:text-primary hover:no-underline">
              What is Loss of Use (LOU)?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              Loss of Use is compensation for the time you are without your vehicle while it is being repaired or replaced. This is often calculated based on the daily rental rate of a comparable vehicle, regardless of whether you actually rented a car or not (in many jurisdictions).
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border-white/10">
            <AccordionTrigger className="text-lg font-medium text-white hover:text-primary hover:no-underline">
              Do you negotiate with the insurance company for me?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              For our **Standard Report** services, we provide you with the professional documentation and guidance you need to negotiate your own claim. We do not negotiate on your behalf. <br/><br/>
              For **Public Adjusting** clients (first-party claims only, where licensed), we can handle the negotiation process directly. This is a separate service subject to specific state licensing regulations.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border-white/10">
            <AccordionTrigger className="text-lg font-medium text-white hover:text-primary hover:no-underline">
              Is this legal advice?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              <strong className="text-white">No.</strong> We are automotive valuation experts, not attorneys. Our reports and consultations are technical opinions on value and automotive damage. We do not provide legal advice, and our services should not be construed as such. If you have legal questions, you should consult with a qualified attorney.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="border-white/10">
            <AccordionTrigger className="text-lg font-medium text-white hover:text-primary hover:no-underline">
              How much does a report cost?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              Our preliminary consultation is free. If we determine you have a viable claim, our comprehensive report fees vary based on the complexity of the vehicle and the claim type. Contact us for a specific quote tailored to your situation.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
