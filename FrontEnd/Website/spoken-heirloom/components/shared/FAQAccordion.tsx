import React, { useState } from "react";
import Image from "next/image";
import { images } from "@/utils/constant";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-4 mb-2">
      {faqs.map((faq, idx) => (
        <div key={idx} className="border-b border-primary-foreground">
          <button
            className="w-full text-left py-5 px-2 font-cormorant font-bold text-lg md:text-base text-primary-foreground flex justify-between items-center focus:outline-none"
            onClick={() => handleToggle(idx)}
            aria-expanded={openIndex === idx}
          >
            <span>
              {idx + 1}. {faq.question}
            </span>
            <span className="ml-2 text-xl flex items-center">
              <Image
                src={images.CommonArrowdown}
                alt={openIndex === idx ? "Collapse" : "Expand"}
                className={
                  openIndex === idx
                    ? "rotate-180 transition-transform duration-200"
                    : "transition-transform duration-200"
                }
                width={10}
                height={10}
              />
            </span>
          </button>
          {openIndex === idx && (
            <div className="font-sans px-2 pb-6 text-xs text-primary-foreground/80 animate-fade-in">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
