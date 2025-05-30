import React from "react";
import { SectionHeader } from "./section-header"; // Assuming SectionHeader is in the same directory or adjust path
import { FaqItem, type Faq } from "./faq-item"; // Assuming FaqItem is in the same directory or adjust path

interface FaqSectionProps {
  title: string;
  items: Faq[];
  className?: string;
  titleClassName?: string;
  gridClassName?: string;
}

export function FaqSection({
  title,
  items,
  className = "",
  titleClassName = "mb-12", // Default margin for title section
  gridClassName = "grid md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto",
}: FaqSectionProps) {
  return (
    <div
      className={`border-t border-gray-200 dark:border-gray-700 pt-16 ${className}`}
    >
      <SectionHeader title={title} description="" className={titleClassName} />
      <div className={gridClassName}>
        {items.map((item, index) => (
          <FaqItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
