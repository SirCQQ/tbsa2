import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function VerifySuccessPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle className="text-center">Email Verificat</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center text-muted-foreground">
            Contul tău a fost verificat cu succes. Acum te poți autentifica în
            aplicație.
          </div>
          <div className="flex justify-center">
            <Button asChild>
              <Link href="/auth/login">Autentificare</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
