import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-secondary">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-12">
          Frequently Asked <span className="text-primary">Questions</span>
        </h2>

        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="item-1" className="border-border">
            <AccordionTrigger className="text-lg font-medium text-foreground hover:text-primary hover:no-underline">
              What is Diminished Value (DV)?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              Diminished Value is the loss in market value a vehicle suffers after an accident, even if it has been perfectly repaired. A vehicle with an accident history is simply worth less than one without. You are entitled to be compensated for this difference in value.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border-border">
            <AccordionTrigger className="text-lg font-medium text-foreground hover:text-primary hover:no-underline">
              Do I qualify for a diminished value or total loss claim?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              If your vehicle was in an accident and has a documented repair, you likely qualify for a DV review. If your insurer declared your vehicle a total loss, you qualify for a replacement-cost review regardless of fault. We review your situation for free before you pay anything.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border-border">
            <AccordionTrigger className="text-lg font-medium text-foreground hover:text-primary hover:no-underline">
              Can I claim diminished value if I was at fault?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              Generally, no — diminished value claims are typically filed as third-party claims against the at-fault driver's insurance. If you were at fault, you likely won't have a viable DV claim against your own insurer. A total loss valuation review, however, is available regardless of fault.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border-border">
            <AccordionTrigger className="text-lg font-medium text-foreground hover:text-primary hover:no-underline">
              Will the insurance company actually pay it?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              Insurers are not required to proactively offer diminished value, and total loss payouts are frequently lower than true replacement cost. A documented, data-driven report significantly strengthens your negotiating position, though payment is never guaranteed.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="border-border">
            <AccordionTrigger className="text-lg font-medium text-foreground hover:text-primary hover:no-underline">
              Do you negotiate with the insurance company for me?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              For our **Standard Report** services, we provide you with the professional documentation and guidance you need to negotiate your own claim. We do not negotiate on your behalf. <br/><br/>
              For **Public Adjusting** clients (first-party claims only, where licensed), we can handle the negotiation process directly. This is a separate service subject to specific state licensing regulations.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="border-border">
            <AccordionTrigger className="text-lg font-medium text-foreground hover:text-primary hover:no-underline">
              How is the value calculated?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              We analyze comparable vehicle sales and current market listings for your exact year, make, model, and condition, then compare that data against the accident history or insurer's offer to calculate the documented loss.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7" className="border-border">
            <AccordionTrigger className="text-lg font-medium text-foreground hover:text-primary hover:no-underline">
              What if there's little or no lost value?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              If our analysis doesn't support a meaningful loss, we'll tell you upfront — you won't be charged for a report that has nothing worth submitting.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8" className="border-border">
            <AccordionTrigger className="text-lg font-medium text-foreground hover:text-primary hover:no-underline">
              Is this legal advice?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">No.</strong> We are automotive valuation experts, not attorneys. Our reports and consultations are technical opinions on value and automotive damage. We do not provide legal advice, and our services should not be construed as such. If you have legal questions, you should consult with a qualified attorney.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
