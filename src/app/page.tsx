import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Building2,
  Users,
  FileText,
  DollarSign,
  ArrowRight,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <div className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-blue-600" />
            <h1 className="text-xl font-bold text-gray-900">AquaSync</h1>
          </div>
          <Link href="/dashboard">
            <Button>
              Acces Dashboard
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-16">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              Platforma Digitală pentru
              <span className="text-blue-600 block">
                Asociațiile de Proprietari
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Gestionează eficient citirile contorilor, listele de plată și
              comunicarea cu proprietarii într-o singură platformă modernă și
              intuitivă.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard">
              <Button size="lg" className="text-lg px-8 py-6">
                Începe Acum
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              Află Mai Multe
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-24 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Building2 className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle>Gestionare Asociații</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Administrează multiple asociații de proprietari dintr-un singur
                loc
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <FileText className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle>Citiri Contor</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Colectează și procesează automat citirile contorilor de apă
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle>Liste de Plată</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Generează automat liste de plată bazate pe consumul de apă
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-orange-600" />
              </div>
              <CardTitle>Comunicare</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Comunică eficient cu proprietarii prin notificări și rapoarte
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Stats Section */}
        <div className="mt-24 bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Platforma de Încredere
            </h2>
            <p className="text-gray-600">
              Utilizată de sute de asociații de proprietari din România
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Asociații Active</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">
                10,000+
              </div>
              <div className="text-gray-600">Proprietari Înregistrați</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">
                50,000+
              </div>
              <div className="text-gray-600">Citiri Procesate Lunar</div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white mt-24">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Building2 className="h-6 w-6 text-blue-600" />
              <span className="font-semibold text-gray-900">AquaSync</span>
            </div>
            <p className="text-gray-600 text-sm">
              © 2024 AquaSync. Toate drepturile rezervate.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
