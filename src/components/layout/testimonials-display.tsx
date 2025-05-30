import React from "react";
import { SectionHeader } from "@/components/layout/section-header";
import {
  TestimonialItem,
  type Testimonial,
} from "@/components/cards/testimonial-item";

interface TestimonialsDisplayProps {
  title: string;
  description: string;
  testimonials: Testimonial[];
  className?: string;
  titleClassName?: string;
  gridClassName?: string;
}

export function TestimonialsDisplay({
  title,
  description,
  testimonials,
  className = "bg-card text-card-foreground rounded-2xl p-8 shadow-lg",
  titleClassName = "mb-12",
  gridClassName = "grid md:grid-cols-3 gap-8",
}: TestimonialsDisplayProps) {
  return (
    <div className={className}>
      <SectionHeader
        title={title}
        description={description}
        className={titleClassName}
      />
      <div className={gridClassName}>
        {testimonials.map((testimonial, index) => (
          <TestimonialItem key={index} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
}
