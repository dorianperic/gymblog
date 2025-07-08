import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FAQ = {
  question: string;
  answer: string;
};

type FrequentlyAskedProps = {
  faqs: FAQ[];
};

const FrequentlyAsked = ({ faqs }: FrequentlyAskedProps) => {
  return (
    <main className="bg-black px-4 sm:px-8 md:px-12" id="faq">
      <h1 className="text-center font-bold text-4xl py-24 text-white">
        Frequently Asked Questions
      </h1>
      <Accordion type="single" collapsible>
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </main>
  );
};

export default FrequentlyAsked;
