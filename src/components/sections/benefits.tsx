import React from "react";
// Card and CardContent are now encapsulated in their respective card components (StatCard, AdvantageCard)
// import { Card, CardContent } from "@/components/ui/card";
import {
  TrendingUp,
  Clock,
  DollarSign,
  Users,
  CheckCircle,
  Zap,
  Globe,
  Award,
} from "lucide-react";
import { SectionHeader } from "@/components/layout/section-header";
import { StatCard, type Stat } from "@/components/cards/stat-card";
import {
  AdvantageCard,
  type Advantage,
} from "@/components/cards/advantage-card";
import { TestimonialsDisplay } from "@/components/layout/testimonials-display";
import type { Testimonial } from "@/components/cards/testimonial-item";
import { RoiTeaserDisplay } from "@/components/layout/roi-teaser-display";
import type { RoiStatValue } from "@/components/cards/roi-teaser-stat";

export function Benefits() {
  const benefits: Stat[] = [
    {
      icon: TrendingUp,
      title: "Creștere cu 40% a eficienței",
      description:
        "Automatizarea proceselor reduce timpul de administrare cu până la 40%",
      stats: "+40%",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Clock,
      title: "Economisește 15 ore/săptămână",
      description:
        "Procesele automate îți dau înapoi timpul pentru activități importante",
      stats: "15h",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: DollarSign,
      title: "Reducere costuri cu 25%",
      description:
        "Eliminarea erorilor și optimizarea proceselor reduc costurile operaționale",
      stats: "-25%",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Users,
      title: "Satisfacție proprietari 95%",
      description:
        "Transparența și comunicarea îmbunătățită cresc satisfacția rezidentilor",
      stats: "95%",
      color: "from-orange-500 to-red-500",
    },
  ];

  const advantages: Advantage[] = [
    {
      icon: CheckCircle,
      title: "Conformitate legislativă completă",
      description:
        "Respectă toate cerințele legale din România pentru asociațiile de proprietari",
    },
    {
      icon: Zap,
      title: "Implementare rapidă",
      description: "Setup complet în 24 de ore cu migrarea datelor existente",
    },
    {
      icon: Globe,
      title: "Acces de oriunde",
      description: "Platform cloud cu acces 24/7 de pe orice dispozitiv",
    },
    {
      icon: Award,
      title: "Premiat pentru inovație",
      description:
        "Recunoscut ca cea mai bună soluție pentru asociații în 2024",
    },
  ];

  const testimonialsData: Testimonial[] = [
    {
      name: "Maria Popescu",
      role: "Președinte Asociație",
      content:
        "AquaSync ne-a transformat complet modul de lucru. În doar 2 luni am redus restanțele cu 60%.",
      rating: 5,
    },
    {
      name: "Ion Georgescu",
      role: "Administrator",
      content:
        "Cea mai bună investiție făcută pentru asociație. Timpul economisit îmi permite să mă concentrez pe îmbunătățiri.",
      rating: 5,
    },
    {
      name: "Ana Vladescu",
      role: "Proprietar",
      content:
        "În sfârșit transparență completă! Știu exact unde se duc banii și pot plăti online foarte simplu.",
      rating: 5,
    },
  ];

  const roiTeaserStatsData: RoiStatValue[] = [
    { value: "3-6 luni", label: "Perioada de recuperare" },
    { value: "€500+", label: "Economie lunară medie" },
    { value: "200%", label: "ROI în primul an" },
  ];

  return (
    <section id="benefits" className="py-20 px-4 bg-muted">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Rezultate măsurabile pentru asociația ta"
          description="Peste 500 de asociații au ales AquaSync și au obținut rezultate spectaculoase în primul an de utilizare."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 pt-12">
          {benefits.map((benefit, index) => (
            <StatCard key={index} benefit={benefit} />
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {advantages.map((advantage, index) => (
            <AdvantageCard key={index} advantage={advantage} />
          ))}
        </div>

        <TestimonialsDisplay
          title="Ce spun clienții noștri"
          description="Feedback real de la administratori și proprietari care folosesc AquaSync"
          testimonials={testimonialsData}
        />

        <RoiTeaserDisplay
          title="Calculează ROI-ul pentru asociația ta"
          description="Descoperă cât poți economisi și în cât timp îți recuperezi investiția cu AquaSync."
          stats={roiTeaserStatsData}
        />
      </div>
    </section>
  );
}
