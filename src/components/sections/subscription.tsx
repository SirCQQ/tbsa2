import React from "react";
// UI components like Card, Button, Badge are now encapsulated in sub-components (PricingCard, AddOnCard)
import {
  Zap,
  BarChart2,
  MessageCircle,
  Home,
  Building2,
  Crown,
} from "lucide-react";
import { SectionHeader } from "@/components/layout/section-header";
import { PricingCard, type Plan } from "@/components/cards/pricing-card";
import { AddOnCard, type AddOn } from "@/components/cards/add-on-card";
import { FaqSection } from "@/components/layout/faq-section";
import type { Faq } from "@/components/layout/faq-item";

export function Subscription() {
  const plans: Plan[] = [
    {
      name: "Starter",
      description: "Perfect pentru asociații mici",
      price: "299",
      period: "lună",
      apartments: "Până la 50 apartamente",
      popular: false,
      icon: Home,
      features: [
        "Gestionare proprietari",
        "Facturare de bază",
        "Rapoarte simple",
        "Support email",
        "1 administrator",
      ],
    },
    {
      name: "Professional",
      description: "Ideal pentru majoritatea asociațiilor",
      price: "599",
      period: "lună",
      apartments: "Până la 200 apartamente",
      popular: true,
      icon: Building2,
      features: [
        "Toate din Starter",
        "Facturare avansată",
        "Rapoarte detaliate",
        "Support prioritar",
        "5 administratori",
        "Import date inițial asistat",
        "Integrări bancare",
      ],
    },
    {
      name: "Enterprise",
      description: "Pentru complexe mari și companii",
      price: "999",
      period: "lună",
      apartments: "Apartamente nelimitate",
      popular: false,
      icon: Crown,
      features: [
        "Toate din Professional",
        "Customizări avansate",
        "API access",
        "Support dedicat",
        "Administratori nelimitați",
        "Consultanță inclusă",
        "SLA garantat",
      ],
    },
  ];

  const addOns: AddOn[] = [
    {
      name: "SMS Notificări",
      description: "Trimite notificări prin SMS către proprietari",
      price: "99",
      icon: Zap,
      features: [
        "1000 SMS-uri/lună",
        "Template-uri custom",
        "Programare automată",
      ],
    },
    {
      name: "Rapoarte avansate (Opțional)",
      description:
        "Obține analize detaliate și rapoarte personalizate pentru asociația ta.",
      price: "299",
      icon: BarChart2,
      features: [
        "Export PDF/Excel",
        "Dashboard interactiv",
        "Filtrare și comparare perioade",
      ],
      popular: true,
    },
    {
      name: "Modul Comunicare Internă",
      description:
        "Canal dedicat pentru anunțuri și discuții între locatari și administratori.",
      price: "199",
      icon: MessageCircle,
      features: ["Anunțuri push", "Chat intern", "Arhivă mesaje"],
    },
  ];

  const faqItemsData: Faq[] = [
    {
      question: "Pot schimba planul oricând?",
      answer:
        "Da, poți upgrade sau downgrade planul oricând. Modificările se aplică din următoarea factură.",
    },
    {
      question: "Există contracte pe termen lung?",
      answer:
        "Nu, toate planurile sunt lunare, fără obligații pe termen lung. Poți anula oricând.",
    },
    {
      question: "Ce include perioada gratuită?",
      answer:
        "30 de zile cu acces complet la toate funcțiile planului ales, fără restricții.",
    },
    {
      question: "Ce presupune opțiunea de rapoarte avansate?",
      answer:
        "Opțiunea de rapoarte avansate, disponibilă pentru planul Enterprise sau ca add-on, oferă acces la analize detaliate, exporturi personalizate și dashboard-uri interactive pentru monitorizarea performanței asociației.",
    },
  ];

  return (
    <section id="subscription" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section header for Subscription */}
        <SectionHeader
          title="Planuri adaptate nevoilor tale"
          description="Alege planul potrivit pentru asociația ta. Poți schimba oricând și beneficiezi de 30 de zile gratuite pentru a testa platforma."
        />

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>

        {/* Add-ons section */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-16">
          <SectionHeader
            title="Servicii suplimentare"
            description="Personalizează experiența cu servicii adicionale"
            className="mb-12"
          />

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {addOns.map((addon, index) => (
              <AddOnCard key={index} addon={addon} />
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <FaqSection title="Întrebări frecvente" items={faqItemsData} />
      </div>
    </section>
  );
}
