import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <Link href="/">
            <Button variant="outline" className="mb-8 bg-transparent">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Zurück zur Startseite
            </Button>
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-8">Impressum</h1>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6 text-sm leading-relaxed">
            <div>
              <p className="font-semibold text-base mb-3">
                Verantwortlich für den Inhalt gemäß § 5 DDG / digitale Dienste:
              </p>
              <p className="font-bold">SSPE AG</p>
              <p>Solutions and Services Par Excellence</p>
              <p>Kieslingstraße 82</p>
              <p>90491 Nürnberg</p>
              <p>Deutschland</p>
            </div>

            <div>
              <p className="font-semibold">Vertreten durch den Vorstand:</p>
              <p>Marc März</p>
            </div>

            <div>
              <p className="font-semibold">Kontakt:</p>
              <p>Telefon: 0911-5690420</p>
              <p>Fax: 0911-5980739</p>
              <p>
                E-Mail:{" "}
                <a href="mailto:Marc.Maerz@sspeag.onmicrosoft.com" className="text-christmas-red hover:underline">
                  Marc.Maerz@sspeag.onmicrosoft.com
                </a>
              </p>
            </div>

            <div>
              <p>Vorsitzender des Aufsichtsrats: Wolf Thorwart</p>
              <p>Handelsregister: HRB 8816, Amtsgericht Fürth</p>
              <p>Firmensitz: Fürth</p>
              <p>USt-IdNr.: DE133500892</p>
            </div>

            <div>
              <p className="font-semibold">Bankverbindung:</p>
              <p>Deutsche Bank AG</p>
              <p>BIC: DEUTDEMM760</p>
              <p>IBAN: DE93 7607 0012 0888 9305 00</p>
            </div>

            <div className="pt-6 border-t border-border">
              <p className="text-muted-foreground">
                © 2025 Buxtehude Erlebnis-Adventskalender 2025. Alle Rechte vorbehalten.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
