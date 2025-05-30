import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Waves, Building, BarChart3 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-blue-950 dark:via-slate-900 dark:to-cyan-950" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 text-blue-200 dark:text-blue-800 opacity-20">
        <Waves className="h-32 w-32" />
      </div>
      <div className="absolute bottom-20 right-10 text-cyan-200 dark:text-cyan-800 opacity-20">
        <Building className="h-28 w-28" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="text-blue-600 dark:text-blue-400">Aqua</span>
            <span className="text-cyan-600 dark:text-cyan-400">Sync</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Platforma modernă pentru gestionarea asociațiilor de proprietari din
            România. Simplificăm administrarea, automatizăm procesele și
            îmbunătățim comunicarea.
          </p>

          {/* Features grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 p-4 rounded-lg bg-card/50 text-card-foreground backdrop-blur-sm">
              <Building className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <span className="font-medium">Gestionare Complexe</span>
            </div>
            <div className="flex items-center justify-center space-x-3 p-4 rounded-lg bg-card/50 text-card-foreground backdrop-blur-sm">
              <BarChart3 className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
              <span className="font-medium">Rapoarte Automate</span>
            </div>
            <div className="flex items-center justify-center space-x-3 p-4 rounded-lg bg-card/50 text-card-foreground backdrop-blur-sm">
              <Waves className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <span className="font-medium">Facturare Inteligentă</span>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="text-lg px-8 py-3">
              <Link href="/dashboard">
                Începe Acum
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 py-3"
            >
              <Link href="#details">Află Mai Multe</Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              De încredere pentru peste 500+ asociații de proprietari
            </p>
            <div className="flex justify-center items-center space-x-8 text-foreground/80">
              <div className="text-2xl font-bold">500+</div>
              <div className="text-2xl font-bold">10k+</div>
              <div className="text-2xl font-bold">99.9%</div>
            </div>
            <div className="flex justify-center items-center space-x-8 text-xs text-muted-foreground mt-1">
              <div>Asociații</div>
              <div>Apartamente</div>
              <div>Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
