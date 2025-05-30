import React from "react";
import {
  Hero,
  Details,
  Subscription,
  Benefits,
  Contact,
} from "@/components/sections";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Details />
        <Subscription />
        <Benefits />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
