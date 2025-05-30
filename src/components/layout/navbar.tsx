import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Waves } from "lucide-react";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Waves className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold">
            <span className="text-blue-600">Aqua</span>
            <span className="text-cyan-600">Sync</span>
          </span>
        </Link>

        {/* Navigation links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="#details"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Funcționalități
          </Link>
          <Link
            href="#subscription"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Prețuri
          </Link>
          <Link
            href="#benefits"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Avantaje
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Right side - theme toggle and CTA */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button asChild variant="outline" size="sm">
            <Link href="/dashboard">Dashboard</Link>
          </Button>
          <Button asChild size="sm">
            <Link href="#contact">Începe Gratuit</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
