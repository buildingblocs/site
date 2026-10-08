import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export interface FAQItem {
  _key: string
  question: string
  answer: string
}

interface EventAccordionProps {
  faq?: FAQItem[]   // used by slug.astro
  faqs?: FAQItem[]  // incase it uses faqs
}

export default function Faq({ faq, faqs }: EventAccordionProps) {
  const items = faq || faqs

  if (!items || items.length === 0) return null

  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item) => (
        <AccordionItem key={item._key} value={item._key}>
          <AccordionTrigger className="text-left font-medium">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="whitespace-pre-line text-muted-foreground">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}