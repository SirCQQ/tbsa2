import React from "react";
import { SectionHeader } from "@/components/layout/section-header";
import {
  RoiTeaserStat,
  type RoiStatValue,
} from "@/components/cards/roi-teaser-stat";

interface RoiTeaserDisplayProps {
  title: string;
  description: string;
  stats: RoiStatValue[];
  className?: string;
  titleClassName?: string;
  gridClassName?: string;
}

export function RoiTeaserDisplay({
  title,
  description,
  stats,
  className = "mt-16 text-center",
  titleClassName = "mb-6", // Adjusted margin for title section
  gridClassName = "grid md:grid-cols-3 gap-6 max-w-3xl mx-auto",
}: RoiTeaserDisplayProps) {
  return (
    <div className={className}>
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
        <SectionHeader
          title={title}
          description={description}
          className={titleClassName}
        />
        <div className={gridClassName}>
          {stats.map((stat, index) => (
            <RoiTeaserStat key={index} stat={stat} />
          ))}
        </div>
      </div>
    </div>
  );
}
