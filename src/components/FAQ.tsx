import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is the home buying process like?",
    answer: "The process typically includes: getting pre-approved for a mortgage, defining your search criteria, touring homes, making an offer, conducting inspections, securing financing, and closing. We guide you through each step, usually completing the process in 30-45 days from accepted offer to closing.",
  },
  {
    question: "How long does it take to sell a home in Charlotte?",
    answer: "In the current market, well-priced homes in desirable neighborhoods typically sell within 2-3 weeks. Luxury properties may take longer. We provide a customized timeline based on your property and goals, with most of our listings selling within 30 days.",
  },
  {
    question: "What costs should I expect when buying a home?",
    answer: "Buyers should budget for: down payment (typically 3-20% of purchase price), closing costs (2-5% of loan amount), home inspection ($300-500), appraisal ($400-600), and moving expenses. We'll provide a detailed estimate specific to your situation.",
  },
  {
    question: "Do I need to get pre-approved before looking at homes?",
    answer: "Yes, we strongly recommend getting pre-approved before starting your search. Pre-approval shows sellers you're a serious buyer and helps you understand your budget. It also speeds up the process when you find the right home.",
  },
  {
    question: "What sets Premier Home Realty apart from other agents?",
    answer: "Our team combines 15+ years of local expertise with personalized service. We limit the number of clients we work with to ensure everyone gets dedicated attention. Our track record of 500+ successful transactions and 98% client satisfaction speaks to our commitment to excellence.",
  },
  {
    question: "How do you determine the right listing price for my home?",
    answer: "We conduct a comprehensive Comparative Market Analysis (CMA) that considers recent sales of similar properties, current market conditions, your home's unique features, and neighborhood trends. This data-driven approach ensures we price your home competitively to attract buyers while maximizing your return.",
  },
  {
    question: "What areas of Charlotte do you specialize in?",
    answer: "We serve the entire Charlotte metro area, with particular expertise in Myers Park, Dilworth, South End, Ballantyne, Eastover, Lake Norman, and the surrounding suburbs. Our team has deep knowledge of each neighborhood's character, schools, and market dynamics.",
  },
  {
    question: "Can you help with relocation from out of state?",
    answer: "Absolutely! We have extensive experience helping families relocate to Charlotte from across the country. We offer virtual tours, neighborhood guides, and can coordinate with your current agent to ensure a smooth transition. Many of our clients never visit Charlotte until closing day.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="section-padding bg-secondary">
      <div className="container-narrow mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Header */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">
              Common Questions
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <div className="gold-divider mb-6" />
            <p className="text-muted-foreground mb-8">
              Have questions about buying or selling a home in Charlotte? 
              We've compiled answers to the most common questions we hear from clients.
            </p>
            <p className="text-muted-foreground">
              Don't see your question?{" "}
              <a href="#contact" className="text-accent hover:text-accent/80 font-medium underline underline-offset-4">
                Contact us directly
              </a>{" "}
              and we'll be happy to help.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-lg px-6 data-[state=open]:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-accent hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
