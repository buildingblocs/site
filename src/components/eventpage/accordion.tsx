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
  faq?: FAQItem[]
  faqs?: FAQItem[]
  items?: FAQItem[]
  // Supports PortableText / Sanity Block rendering
  value?: {
    faqs?: FAQItem[]
    items?: FAQItem[]
  }
}

export default function Faq({ faq, faqs, items, value }: EventAccordionProps) {
  //  handle direct props (faq, faqs, items) or Sanity PortableText block (value)
  const list = faq || faqs || items || value?.faqs || value?.items

  if (!list || list.length === 0) return null

  return (
    <Accordion type="single" collapsible className="w-full">
      {list.map((item) => (
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