import React from "react";

export interface Faq {
  question: string;
  answer: string;
}

interface FaqItemProps {
  item: Faq;
}

export function FaqItem({ item }: FaqItemProps) {
  return (
    <div>
      <h4 className="font-medium text-gray-900 dark:text-white mb-2">
        {item.question}
      </h4>
      <p className="text-sm text-gray-600 dark:text-gray-300">{item.answer}</p>
    </div>
  );
}
