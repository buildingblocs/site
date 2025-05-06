import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function Faq({ faq }: { faq: Array<{ q: string; a: string; }> }) {
    const faqs = faq.map((faq) =>
        <AccordionItem value={faq.q} key={faq.q}>
            <AccordionTrigger>{faq.q}</AccordionTrigger>
            <AccordionContent>
                <div className="prose prose-invert" dangerouslySetInnerHTML={{ __html: faq.a }} />
            </AccordionContent>
        </AccordionItem>);
    return (
        <Accordion type="multiple">{faqs}</Accordion>
    )
}
