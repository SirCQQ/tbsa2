import React from "react";
import { CheckCircle } from "lucide-react"; // Assuming CheckCircle is for rating stars

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  // avatar?: string; // Optional: if you add avatars later
}

interface TestimonialItemProps {
  testimonial: Testimonial;
}

export function TestimonialItem({ testimonial }: TestimonialItemProps) {
  return (
    <div className="text-center h-full flex flex-col">
      <div className="flex justify-center mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <CheckCircle // Or a Star icon if preferred for ratings. Star icon color is fine.
            key={i}
            className="h-5 w-5 text-yellow-400 mx-0.5 fill-yellow-400"
          />
        ))}
      </div>
      <blockquote className="text-card-foreground/80 mb-4 italic flex-grow">
        &ldquo;{testimonial.content}&rdquo;
      </blockquote>
      <div className="font-semibold text-card-foreground mt-auto">
        {testimonial.name}
      </div>
      <div className="text-sm text-card-foreground/60">{testimonial.role}</div>
    </div>
  );
}
