import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";

export interface Advantage {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface AdvantageCardProps {
  advantage: Advantage;
}

export function AdvantageCard({ advantage }: AdvantageCardProps) {
  const Icon = advantage.icon;
  return (
    <Card className="bg-card text-card-foreground shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
      <CardContent className="p-6 text-center">
        <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mx-auto mb-4">
          <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
        </div>
        <h3 className="text-lg font-semibold mb-2">{advantage.title}</h3>
        <p className="text-sm opacity-80">{advantage.description}</p>
      </CardContent>
    </Card>
  );
}
