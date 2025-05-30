import React from "react";

export interface RoiStatValue {
  value: string;
  label: string;
}

interface RoiTeaserStatProps {
  stat: RoiStatValue;
}

export function RoiTeaserStat({ stat }: RoiTeaserStatProps) {
  return (
    <div className="bg-white/20 rounded-lg p-4">
      <div className="text-2xl font-bold">{stat.value}</div>
      <div className="text-sm text-blue-100">{stat.label}</div>
    </div>
  );
}
