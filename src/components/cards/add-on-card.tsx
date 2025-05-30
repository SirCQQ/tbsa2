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
import { Check, type LucideIcon } from "lucide-react";

export interface AddOn {
  name: string;
  description: string;
  price: string;
  icon: LucideIcon;
  features: string[];
  popular?: boolean;
}

interface AddOnCardProps {
  addon: AddOn;
}

export function AddOnCard({ addon }: AddOnCardProps) {
  const Icon = addon.icon;
  return (
    <Card
      className={`text-center relative h-full flex flex-col ${
        addon.popular ? "border-2 border-blue-500 shadow-lg" : ""
      }`}
    >
      {addon.popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <Badge className="bg-blue-500 text-white px-3 py-1 text-xs">
            Popular
          </Badge>
        </div>
      )}
      <CardHeader className="pb-4">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <CardTitle className="text-lg">{addon.name}</CardTitle>
        <CardDescription>{addon.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 flex flex-col flex-grow">
        <div className="text-2xl font-bold text-blue-600 mb-4">
          {addon.price} RON/lună
        </div>

        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300 flex-grow">
          {addon.features.map((feature, featureIndex) => (
            <li key={featureIndex} className="flex items-center justify-center">
              <Check className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
        <Button variant="outline" className="w-full mt-6">
          Adaugă opțiunea
        </Button>
      </CardContent>
    </Card>
  );
}
