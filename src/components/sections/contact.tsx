import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Mail,
  Phone,
  MessageCircle,
  Headphones,
  FileText,
  Video,
} from "lucide-react";
import { ContactForm } from "@/components/forms";
import { SectionHeader } from "@/components/layout/section-header";
import { ContactInformation } from "@/components/layout/contact-information";

export function Contact() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Telefon",
      description: "Vorbește direct cu echipa noastră",
      value: "+40 21 123 4567",
      action: "Sună acum",
      actionLink: "tel:+40211234567",
      available: "Luni-Vineri 9:00-18:00",
    },
    {
      icon: Mail,
      title: "Email",
      description: "Scrie-ne și îți răspundem în 2 ore",
      value: "contact@aquasync.ro",
      action: "Trimite email",
      actionLink: "mailto:contact@aquasync.ro",
      available: "24/7",
    },
    {
      icon: MessageCircle,
      title: "Chat Live",
      description: "Discută instant cu un consultant",
      value: "Chat disponibil",
      action: "Pornește chat",
      actionLink: "#chat",
      available: "Luni-Vineri 9:00-18:00",
    },
    {
      icon: Video,
      title: "Demo Video Call",
      description: "Programează o demonstrație personalizată",
      value: "30 min gratuit",
      action: "Programează",
      actionLink: "#book-demo",
      available: "După programare",
    },
  ];

  const supportOptions = [
    {
      icon: FileText,
      title: "Centru de Ajutor",
      description: "Ghiduri și tutoriale complete",
      link: "/help-center",
    },
    {
      icon: Headphones,
      title: "Support Tehnic",
      description: "Asistență specializată 24/7",
      link: "/support",
    },
    {
      icon: Video,
      title: "Training Live",
      description: "Sesiuni de training în grup",
      link: "/training",
    },
  ];

  const offices = [
    {
      city: "București",
      address: "Bd. Aviatorilor 123, Sector 1",
      phone: "+40 21 123 4567",
      hours: "Luni-Vineri: 9:00-18:00",
    },
    {
      city: "Cluj-Napoca",
      address: "Str. Memorandumului 28",
      phone: "+40 264 123 456",
      hours: "Luni-Vineri: 9:00-17:00",
    },
  ];

  // Emergency contact details
  const emergencyContact = {
    title: "Urgențe Tehnice (Non-Stop)",
    phone: "+40 777 112 112",
    description:
      "Pentru probleme critice care necesită intervenție imediată (ex: server offline, breșe de securitate majore).",
  };

  return (
    <section id="contact" className="py-20 px-4 bg-muted">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Hai să discutăm despre asociația ta"
          description="Echipa noastră de experți este gata să te ajute să găsești soluția perfectă pentru nevoile asociației tale."
          className="mb-16 text-center"
        />

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2">
            <Card className="bg-card text-card-foreground shadow-xl rounded-xl border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">
                  Trimite-ne un mesaj
                </CardTitle>
                <CardDescription className="opacity-80">
                  Completează formularul și te contactăm în maximum 2 ore
                  lucrătoare.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>

          <div className="lg:sticky lg:top-24">
            <ContactInformation
              contactMethods={contactMethods}
              supportOptions={supportOptions}
              offices={offices}
            />
          </div>
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-destructive/10 border-destructive/20 text-destructive p-6 rounded-xl shadow-lg">
            <CardHeader className="p-0 mb-4">
              <div className="flex justify-center items-center mb-3">
                <div className="w-12 h-12 rounded-full bg-destructive/20 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-destructive" />
                </div>
              </div>
              <CardTitle className="text-xl font-semibold">
                {emergencyContact.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-2xl font-bold mb-2">
                <a
                  href={`tel:${emergencyContact.phone}`}
                  className="hover:underline"
                >
                  {emergencyContact.phone}
                </a>
              </p>
              <p className="text-sm opacity-80 max-w-md mx-auto">
                {emergencyContact.description}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
