import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/new-york-v4/ui/accordion"

const faqs = [
  {
    question: "What is included in the free plan?",
    answer:
      "The free plan includes up to 3 projects, basic collaboration tools, and access to community templates.",
  },
  {
    question: "Can I upgrade or downgrade my plan at any time?",
    answer:
      "Yes, you can change your plan at any time from your account settings. Changes take effect immediately.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "We do not offer refunds, but you can cancel your subscription at any time and retain access until the end of the billing cycle.",
  },
  {
    question: "Do you offer support?",
    answer:
      "Yes, we offer email support for all users. Pro users get priority support with faster response times.",
  },
]
const faqs2 = [
  {
    question: "Can I upgrade or downgrade my plan at any time?",
    answer:
      "Yes, you can change your plan at any time from your account settings. Changes take effect immediately.",
  },
  {
    question: "What is included in the free plan?",
    answer:
      "The free plan includes up to 3 projects, basic collaboration tools, and access to community templates.",
  },
  {
    question: "Do you offer support?",
    answer:
      "Yes, we offer email support for all users. Pro users get priority support with faster response times.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "We do not offer refunds, but you can cancel your subscription at any time and retain access until the end of the billing cycle.",
  },
]

export default function AccordionDemo() {
  return (
    <div className="grid max-w-5xl grid-cols-1 gap-4 lg:grid-cols-2">
      <Accordion
        type="single"
        collapsible
        className="flex w-full flex-col gap-4"
      >
        {faqs.map((item, idx) => (
          <AccordionItem
            key={`item-${idx}`}
            value={`item-${idx}`}
            className="w-full max-w-5xl rounded-lg border-b-0 bg-[#0E1330] px-4"
          >
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent className="max-w-5xl text-[#8F9BB7]">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <Accordion
        type="single"
        collapsible
        className="flex w-full flex-col gap-4"
      >
        {faqs2.map((item, idx) => (
          <AccordionItem
            key={`item-${idx + 4}`}
            value={`item-${idx}`}
            className="w-full max-w-5xl rounded-lg border-b-0 bg-[#0E1330] px-4"
          >
            <AccordionTrigger className="w-5xl">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-[#8F9BB7]">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
