import React from "react";
import { Waves } from "lucide-react"; // Waves is used in Footer

export function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Waves className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">
                <span className="text-primary">Aqua</span>
                <span className="text-cyan-500">Sync</span>
              </span>
            </div>
            <p className="mb-6 max-w-md">
              Platforma modernă pentru gestionarea asociațiilor de proprietari
              din România. Simplificăm administrarea, automatizăm procesele și
              îmbunătățim comunicarea.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors">
                <span className="sr-only">Facebook</span>
                📘
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <span className="sr-only">Twitter</span>
                🐦
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <span className="sr-only">LinkedIn</span>
                💼
              </a>
            </div>
          </div>

          {/* Product links */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Produs</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#details"
                  className="hover:text-primary transition-colors"
                >
                  Funcționalități
                </a>
              </li>
              <li>
                <a
                  href="#subscription"
                  className="hover:text-primary transition-colors"
                >
                  Prețuri
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Demo
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  API
                </a>
              </li>
            </ul>
          </div>

          {/* Support links */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Suport</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Centru de Ajutor
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Status
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Securitate
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            © 2024 AquaSync. Toate drepturile rezervate.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="hover:text-primary text-sm transition-colors"
            >
              Termeni și Condiții
            </a>
            <a
              href="#"
              className="hover:text-primary text-sm transition-colors"
            >
              Politica de Confidențialitate
            </a>
            <a
              href="#"
              className="hover:text-primary text-sm transition-colors"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
