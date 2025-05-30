import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, type LucideIcon } from "lucide-react";

export interface Plan {
  name: string;
  description: string;
  price: string;
  period: string;
  apartments: string;
  popular: boolean;
  icon: LucideIcon;
  features: string[];
}

interface PricingCardProps {
  plan: Plan;
}

export function PricingCard({ plan }: PricingCardProps) {
  const PlanIcon = plan.icon;
  return (
    <Card
      className={`relative border-2 h-full flex flex-col ${
        plan.popular
          ? "border-blue-500 shadow-xl scale-105"
          : "border-gray-200 dark:border-gray-700"
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <Badge className="bg-blue-500 text-white px-4 py-1">
            <Star className="w-3 h-3 mr-1" />
            Cel mai popular
          </Badge>
        </div>
      )}

      <CardHeader className="text-center pb-8">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4">
          <PlanIcon className="h-7 w-7 text-white" />
        </div>
        <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
        <CardDescription className="text-gray-600 dark:text-gray-300">
          {plan.description}
        </CardDescription>
        <div className="mt-4">
          <div className="flex items-baseline justify-center">
            <span className="text-4xl font-bold text-gray-900 dark:text-white">
              {plan.price}
            </span>
            <span className="text-lg text-gray-500 ml-1">
              RON/{plan.period}
            </span>
          </div>
          <p className="text-sm text-gray-500 mt-2">{plan.apartments}</p>
        </div>
      </CardHeader>

      <CardContent className="space-y-4 flex flex-col flex-grow">
        <ul className="space-y-3 flex-grow">
          {plan.features.map((feature, featureIndex) => (
            <li key={featureIndex} className="flex items-center">
              <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
              <span className="text-sm text-gray-600 dark:text-gray-300">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        <Button
          className={`w-full mt-6 ${
            plan.popular ? "bg-blue-600 hover:bg-blue-700" : ""
          }`}
          variant={plan.popular ? "default" : "outline"}
          size="lg"
        >
          Începe perioada gratuită
        </Button>
      </CardContent>
    </Card>
  );
}
