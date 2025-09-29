import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "Do plumbers deal with heating?",
    answer: "Some of our local plumbers are also gas registered and experienced working on heating systems, bathrooms and kitchens.",
  },
  {
    question: "Do you charge a call out fee?",
    answer: "Some of our local plumbers are also gas registered and experienced working on heating systems, bathrooms and kitchens.",
  },
  {
    question: "How quickly can your company send out an engineer?",
    answer: "Some of our local plumbers are also gas registered and experienced working on heating systems, bathrooms and kitchens.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto my-10">
      <h2 className="text-[24px] lg:text-[48px] md:text-[32px] font-bold text-center mb-[32px] md:mb-[40px] lg:mb-[120px]">Frequently Asked Questions</h2>
      <div className="">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`${faqs.length -1 !== index && 'border-b' } py-[32px] border-[#D4DBE0]`}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-4  text-left text-[21px] font-semibold text-[#1B1743] cursor-pointer"
            >
              {faq.question}
              <span className="ml-2">
                {openIndex !== index ? <IoIosArrowDown />
                  : <IoIosArrowUp />
                }
              </span>
            </button>
            {openIndex === index && (
              <div className="px-4 pt-[32px] text-gray-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
