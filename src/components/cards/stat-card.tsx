import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";

export interface Stat {
  icon: LucideIcon;
  title: string;
  description: string;
  stats: string;
  color: string; // e.g., "from-green-500 to-emerald-500"
}

interface StatCardProps {
  benefit: Stat;
}

export function StatCard({ benefit }: StatCardProps) {
  const Icon = benefit.icon;
  return (
    <Card className="bg-card text-card-foreground shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 h-full">
      <CardContent className="p-6">
        <div className="flex flex-row items-center gap-4">
          <div
            className={`w-12 h-12 rounded-lg bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
          >
            <Icon className="h-6 w-6 text-white" />
          </div>
          <div
            className={`text-3xl font-bold bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent mb-2`}
          >
            {benefit.stats}
          </div>
        </div>
        <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
        <p className="text-sm opacity-80">{benefit.description}</p>
      </CardContent>
    </Card>
  );
}
