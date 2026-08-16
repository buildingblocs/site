import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/accordion";

export default function Faq({ faq }: { faq: Array<{ question: string; answer: string; _key: string; }> }) {
    const faqs = faq.map((faq) =>
        <AccordionItem className=" border-white/15 border-b last:border-b-0" value={faq.question} key={faq._key}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>
                <div className="prose prose-invert" dangerouslySetInnerHTML={{ __html: faq.answer }} />
            </AccordionContent>
        </AccordionItem>);
    return (
        <Accordion className="border border-white/15" type="multiple">{faqs}</Accordion>
    );
}
