import React from "react";
// Card components are now in FeatureCard.tsx
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
import {
  Users,
  FileText,
  CreditCard,
  BarChart3,
  MessageSquare,
  Calendar,
  Shield,
  DatabaseZap,
} from "lucide-react";
import { SectionHeader } from "@/components/layout/section-header";
import { FeatureCard, type Feature } from "@/components/cards/feature-card"; // Import FeatureCard and Feature type
import { BottomCta } from "@/components/layout/bottom-cta"; // Import BottomCta

export function Details() {
  const features: Feature[] = [
    {
      icon: Users,
      title: "Gestionare Proprietari",
      description:
        "Administrează cu ușurință datele proprietarilor, chiriașilor și apartamentelor.",
      details: [
        "Baza de date centralizată",
        "Istoric complet",
        "Import/Export date",
      ],
    },
    {
      icon: FileText,
      title: "Facturare Automată",
      description:
        "Generează automat facturile pentru întreținere, utilități și servicii suplimentare.",
      details: [
        "Template-uri personalizabile",
        "Calcule automate",
        "Facturi în format PDF",
      ],
    },
    {
      icon: CreditCard,
      title: "Urmărire Plăți",
      description:
        "Monitorizează plățile, restanțele și emite notificări automate.",
      details: [
        "Rapoarte restanțe",
        "Notificări automate",
        "Integrare bancară",
      ],
    },
    {
      icon: BarChart3,
      title: "Rapoarte Avansate",
      description:
        "Analize detaliate și rapoarte financiare pentru o gestiune transparentă.",
      details: [
        "Dashboard analytic",
        "Export Excel/PDF",
        "Grafice interactive",
      ],
    },
    {
      icon: MessageSquare,
      title: "Comunicare Digitală",
      description:
        "Sistem de comunicare integrat pentru anunțuri și notificări.",
      details: ["Anunțuri instant", "Email/SMS", "Portal proprietari"],
    },
    {
      icon: Calendar,
      title: "Programare Evenimente",
      description:
        "Organizează ședințe, lucrări de mentenanță și alte evenimente.",
      details: ["Calendar integrat", "Reminder-uri", "Gestionare resurse"],
    },
    {
      icon: Shield,
      title: "Securitate Avansată",
      description:
        "Protecție completă a datelor cu backup automat și criptare.",
      details: ["Criptare SSL", "Backup zilnic", "Acces controlat"],
    },
    {
      icon: DatabaseZap,
      title: "Import Date Inițial Asistat",
      description:
        "Te ajutăm să transferi datele existente în platformă rapid și corect.",
      details: ["Asistență dedicată", "Validare date", "Proces rapid"],
    },
  ];

  return (
    <section id="details" className="py-20 px-4 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <SectionHeader
          title="Totul de care ai nevoie pentru o administrare eficientă"
          description="AquaSync oferă toate instrumentele necesare pentru gestionarea modernă a asociațiilor de proprietari, de la facturare la comunicare."
        />

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>

        {/* Bottom CTA */}
        <BottomCta />
      </div>
    </section>
  );
}
