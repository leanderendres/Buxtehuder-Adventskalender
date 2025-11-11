"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Gift, Heart, MapPin, Sparkles, CalendarIcon, Mail, Facebook, Instagram } from "lucide-react"
import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function BuxtehudeAdventskalender() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Gift className="h-6 w-6 text-christmas-red" />
              <span className="font-bold text-xl">Buxtehude</span>
            </div>
            <div className="hidden md:flex items-center gap-6 text-sm">
              <a href="#kalender" className="hover:text-christmas-red transition-colors">
                Kalender
              </a>
              <a href="#so-funktionierts" className="hover:text-christmas-red transition-colors">
                So funktioniert's
              </a>
              <a href="#spenden" className="hover:text-christmas-red transition-colors">
                Spenden
              </a>
              <a href="#teilnehmer" className="hover:text-christmas-red transition-colors">
                Unternehmen
              </a>
              <a href="#gewinnspiele" className="hover:text-christmas-red transition-colors">
                Gewinnspiele
              </a>
              <a href="#verkaufsstellen" className="hover:text-christmas-red transition-colors">
                Verkaufsstellen
              </a>
              <a href="#faq" className="hover:text-christmas-red transition-colors">
                FAQ
              </a>
              <a href="#kontakt" className="hover:text-christmas-red transition-colors">
                Kontakt
              </a>
            </div>
          </div>
        </div>
      </nav>

      <section id="kalender" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Buxtehude%20Weihnachtsmarkt%20Bild%201-i55XYrQYFWjeaNgmcOqaNfhCIyaIX7.jpg"
            alt="Buxtehude Weihnachtsmarkt"
            fill
            className="object-cover"
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
            priority
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        </div>

        {/* Parallax decorative elements */}
        <div
          className="absolute top-20 left-10 w-32 h-32 rounded-full bg-christmas-green/20 blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />
        <div
          className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-christmas-red/20 blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        />

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-christmas-green/90 rounded-full text-sm text-white border border-christmas-green/50">
              <Sparkles className="h-4 w-4" />
              <span>Der neue Buxtehude Erlebnis-Adventskalender 2025!</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight text-white drop-shadow-lg">
              24 Erlebnisse, über 200 € Wert – für nur <span className="text-christmas-gold">21,50 €</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/95 text-pretty max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              24 Mal Erlebnisse, Geschenke, Vorteile – und das gute Gefühl, beim Genuss etwas Gutes getan zu haben.
            </p>

            <p className="text-lg text-white/90 drop-shadow-md">Hol ihn dir als Geschenk oder zum Selbernutzen!</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button
                size="lg"
                className="bg-christmas-red hover:bg-christmas-red/90 text-white px-8 h-14 text-lg rounded-xl shadow-2xl hover:shadow-xl transition-all hover:scale-105"
              >
                <Gift className="h-5 w-5 mr-2" />
                Jetzt kaufen!
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-christmas-green h-14 px-8 text-lg rounded-xl bg-transparent backdrop-blur-sm transition-all"
                asChild
              >
                <a href="#verkaufsstellen">Verkaufsstellen vor Ort</a>
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 text-sm">
              <div className="flex items-center gap-2 text-white/90 drop-shadow-md">
                <CalendarIcon className="h-5 w-5 text-christmas-gold" />
                <span>Nur solange der Vorrat reicht</span>
              </div>
              <div className="flex items-center gap-2 text-white/90 drop-shadow-md">
                <Gift className="h-5 w-5 text-christmas-gold" />
                <span>Gesamtwert ca. 200 €</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* So funktioniert's */}
      <section id="so-funktionierts" className="py-24 bg-muted/30 relative overflow-hidden">
        <div
          className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-christmas-gold/8 blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">So funktioniert's</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              In vier einfachen Schritten zu deinem Adventskalender-Erlebnis
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Gift,
                title: "1. Kalender kaufen",
                desc: "Online oder vor Ort in teilnehmenden Geschäften",
                color: "christmas-red",
              },
              {
                icon: CalendarIcon,
                title: "2. Türchen öffnen",
                desc: "Jeden Tag im Dezember ein neues Erlebnis entdecken",
                color: "christmas-green",
              },
              {
                icon: MapPin,
                title: "3. Gutscheine einlösen",
                desc: "In teilnehmenden Buxtehuder Unternehmen",
                color: "christmas-gold",
              },
              {
                icon: Heart,
                title: "4. Gutes tun",
                desc: "Gleichzeitig lokale Projekte durch Spenden unterstützen",
                color: "christmas-red",
              },
            ].map((step, i) => (
              <Card key={i} className="border-2 hover:border-christmas-red/50 transition-all hover:shadow-lg bg-card">
                <CardContent className="pt-8 pb-6 text-center space-y-4">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-${step.color}/10 text-${step.color}`}
                  >
                    <step.icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-bold text-lg">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="spenden" className="py-24 relative overflow-hidden">
        <div
          className="absolute top-40 left-20 w-48 h-48 rounded-full bg-christmas-green/8 blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        />
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Spenden für gute Zwecke</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
              Unsere Adventskalender schaffen Mehrwert und Erlebnisse für die Käufer, stärken lokale Unternehmen – vor
              allem in den Innenstädten – und unterstützen durch Spenden lokale, ehrenamtliche Arbeit für gute, soziale
              Zwecke.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-12 p-6 bg-christmas-red/5 rounded-2xl border border-christmas-red/20">
            <p className="text-center text-lg font-medium">
              <Heart className="inline h-5 w-5 text-christmas-red mr-2" />
              Unsere Spenden erfolgen aus den Erlösen der Kalenderverkäufe. Je mehr Kalender wir verkaufen, desto höher
              sind unsere Spenden!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 border-christmas-green/30 bg-gradient-to-br from-christmas-green/5 to-transparent hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-8 space-y-4">
                <div className="flex justify-center mb-4">
                  <div className="relative w-32 h-32">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nr%2010%20BSV-LVxfjAhFlDblp78yo3GjCnUW2p6swc.png"
                      alt="Buxtehuder SV Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center">Buxtehuder SV</h3>
                <p className="text-muted-foreground leading-relaxed text-center">
                  Wir unterstützen die großartige Jugendarbeit des Buxtehuder SV.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-christmas-red/30 bg-gradient-to-br from-christmas-red/5 to-transparent hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-8 space-y-4">
                <div className="flex justify-center mb-4">
                  <div className="relative w-32 h-32">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Altstadtverein-OD9cxMgFbil8KZGU75mlr9JY5QCzyx.png"
                      alt="Altstadtverein Buxtehude Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center">Altstadtverein</h3>
                <p className="text-muted-foreground leading-relaxed text-center">
                  Wir unterstützen den Altstadtverein bei seiner Arbeit, die Innenstadt für alle noch liebenswerter zu
                  machen.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Teilnehmende Unternehmen */}
      <section id="teilnehmer" className="py-24 bg-muted/30 relative overflow-hidden">
        <div
          className="absolute bottom-20 left-10 w-56 h-56 rounded-full bg-christmas-gold/8 blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.08}px)` }}
        />
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Teilnehmende Unternehmen</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Wir haben bewusst Unternehmen aus vielen verschiedenen Branchen gebeten, Geschenke für die Buxtehuder
              bereitzustellen. Allen Teilnehmern ein großes Dankeschön!
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              {
                name: "Amadeus",
                logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Amadeus%20Logo%20Buxtehude%202025-KFO7OZZcWG7sZXonx2h5gd29EcMGLO.png",
              },
              {
                name: "Bunte Kinderkiste",
                logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bunte%20Kinderkiste%202025-GsQiYfGtHWUT1nZ25dpC7Mzq1UHyo2.jpg",
              },
              {
                name: "Buxtehuder SV",
                logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20Buxtehude%202025-ihq2PwluxzC6m2CBXOmDusxJlaNMtK.png",
              },
              {
                name: "Café Docé",
                logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CafeDoce-1-rq50pg2VDAh7HOAGFiOikmdYslzrDF.png",
              },
              {
                name: "Das Futterhaus Buxtehude",
                logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Futterhaus%20Stade%20Logo%202025-dWcLOVCqgffTILIhj3YmvHDdPGUIlg.jpg",
              },
              {
                name: "Ernsting's family",
                logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nr%204%20Ernsting%20breit-JWj10XKtB3TI6gFz9KcMC4zK7lhZm9.jpg",
              },
              {
                name: "EURONICS Wiegel",
                logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Euronics_Wiegel-YucrQgjZ4dlEtlBbCFwjtcSMD41CTt.png",
              },
              {
                name: "Flamingo Grill",
                logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Flamingo%20Logo%20Buxtehude%202025-Qeu61NOyjbMY4iQxMn1yI5s0yIZlwF.png",
              },
              {
                name: "Hermann – Schönes Leben",
                logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hermann%20Scho%CC%88ner%20Leben%20Logo%20Buxtehude%202025-GlSBe3MxHAhycA6HdXIUN6QE9wMvQc.png",
              },
              {
                name: "Kreativ Bastelparadies",
                logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nr%208%20Bastelparadies%20kreativ.JPG-PLZRKTn6fVfyZVm2TPLkx9EYBmKcv9.jpeg",
              },
              {
                name: "lenya natürlich!",
                logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lenya%20Logo%20Buxtehude%202025-qLTLPjcRyDjnSo8qYWXaRTf7yPtGCw.png",
              },
              {
                name: "Ludwig von Karpff",
                logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nr%206%20von%20karpff%201-w6quNIPBfl0LmKS2RHYdUmmynrl5Dg.webp",
              },
              {
                name: "Märchenhaft",
                logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ma%CC%88rchenhaft%20Logo%20Buxtehude%202025-Ri3xw8nL2YOdsdOVtaZJCuhsOZHT61.png",
              },
              {
                name: "Mundfein Pizzawerkstatt",
                logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mundfein%20Logo-hAT6dPn5Rww4pLZhb1ZwYcbD84bX9F.png",
              },
              {
                name: "Nähatelier kreativer Faden",
                logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kreativer%20Faden-yVwwqKoxxuR1uvLoT6tfHDQwdgU4cX.png",
              },
              {
                name: "Obsthof Brunckhorst",
                logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Obsthof%20Brunckhorst%20Logo%202025-TYvRwKonlOClHy3mlfU7FYUJEEFCzy.png",
              },
              {
                name: "PfefferTörtchen",
                logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pfefferto%CC%88rtchen%20Nr%2015-WorAjLOlRwqDGo6UuHikpI37HA1VtX.jpg",
              },
              {
                name: "Ringfoto Schattke",
                logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20Buxtehude%202025%20Nr%207-O8PRSgFXsO4Ur0WoV33nQWXFyvpBKE.jpg",
              },
              {
                name: "s'Fachl",
                logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sFachl%20Logo-3xPv7vLCWV46GmUTfnuh9ZTa56Vbvd.png",
              },
              {
                name: "Smash'lt Burger",
                logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Smash%20It%20Burger%20Logo%202025-0BhbotwopyCs7iB0eRjP57T2CQ9x38.webp",
              },
              {
                name: "Stil & Blüte",
                logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Buxtehude%202025%20Logo%20Nr%205-LZGyRQ97TLso7MTkCh3NCQhNF4qQ0X.png",
              },
              {
                name: "Sushi Palace",
                logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sushi%20Palace%20Logo%202025-ClO0vSKK2TyknMDsowTuYKdWxjWsPe.png",
              },
              {
                name: "Taj Mahal",
                logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Taj%20Mahal%20Logo-Ck8e0Km9RVE9fUiwlxk24UfFOGtfFx.png",
              },
            ].map((company, i) => (
              <Card key={i} className="hover:border-christmas-red/50 transition-all hover:shadow-md bg-card">
                <CardContent className="p-6 text-center flex flex-col items-center justify-center gap-3 min-h-[120px]">
                  {company.logo && (
                    <div className="relative w-full h-16 mb-2">
                      <Image
                        src={company.logo || "/placeholder.svg"}
                        alt={`${company.name} Logo`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  )}
                  <p className="font-medium text-sm">{company.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Eine dänische Tradition */}
      <section id="gewinnspiele" className="py-24 relative overflow-hidden">
        <div
          className="absolute top-20 right-20 w-56 h-56 rounded-full bg-christmas-red/8 blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.12}px)` }}
        />
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Eine dänische Tradition</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Adventskalender mit Mehrwert – inspiriert von skandinavischer Gemeinschaft
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-2 bg-gradient-to-br from-christmas-green/5 to-christmas-red/5 shadow-xl">
              <CardContent className="pt-10 pb-10 space-y-8">
                <div className="flex justify-center mb-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-christmas-red/10 text-christmas-red mx-auto">
                    <Heart className="h-10 w-10" />
                  </div>
                </div>

                <p className="text-lg md:text-xl leading-relaxed text-center text-foreground">
                  In 30 dänischen Städten sind Adventskalender mit Geschenken und Rabatten der örtlichen Unternehmen
                  bereits eine weihnachtliche Tradition. Auch in Buxtehude haben wir 24 Mal Vorteile, Freude und
                  Erlebnisse für die Kalenderkäufer eingesammelt.
                </p>

                <div className="pt-6 pb-6">
                  <div className="h-px bg-gradient-to-r from-transparent via-christmas-gold to-transparent" />
                </div>

                <div className="bg-christmas-gold/10 rounded-xl p-6 border border-christmas-gold/30">
                  <p className="text-lg leading-relaxed text-center">
                    <span className="font-semibold text-christmas-gold">Ganz nach dänischem Vorbild</span> werden auch
                    bei uns Teile des Erlöses für lokale gute Zwecke gespendet.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 pt-6">
                  <div className="text-center space-y-2">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-christmas-green/10 text-christmas-green mx-auto">
                      <Gift className="h-6 w-6" />
                    </div>
                    <h4 className="font-semibold">24 Erlebnisse</h4>
                    <p className="text-sm text-muted-foreground">Lokale Geschenke und Vorteile</p>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-christmas-red/10 text-christmas-red mx-auto">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <h4 className="font-semibold">Lokale Unternehmen</h4>
                    <p className="text-sm text-muted-foreground">Stärkung der Innenstadt</p>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-christmas-gold/10 text-christmas-gold mx-auto">
                      <Heart className="h-6 w-6" />
                    </div>
                    <h4 className="font-semibold">Gute Zwecke</h4>
                    <p className="text-sm text-muted-foreground">Spenden aus den Erlösen</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Verkaufsstellen */}
      <section id="verkaufsstellen" className="py-24 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Buxtehude%20Weihnachtsmarkt%20Bild%201-i55XYrQYFWjeaNgmcOqaNfhCIyaIX7.jpg"
            alt="Buxtehude Weihnachtsmarkt"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Verkaufsstellen</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Unsere Adventskalender kannst du nicht nur online bestellen – du bekommst ihn auch in ausgewählten
              teilnehmenden Geschäften in Buxtehude. Wer Porto und Versand sparen und den Kalender vor dem Kauf sehen
              möchte, besucht eine dieser Verkaufsstellen.
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Bunte Kinderkiste", address: "St.-Petri-Platz 1–3, Buxtehude" },
              { name: "Buxtehuder SV", address: "Viverstraße 2, Buxtehude" },
              { name: "Das Futterhaus Buxtehude", address: "Konrad-Adenauer-Allee 3b, Buxtehude" },
              { name: "EURONICS Wiegel", address: "Zwischen den Brücken 1, Buxtehude" },
              { name: "Hermann – Schönes Leben", address: "Nordviver 2, Buxtehude" },
              { name: "Kreativ Bastelparadies", address: "Bahnhofstraße 5, Buxtehude" },
              { name: "Stil & Blüte", address: "Viverstraße 2, Buxtehude" },
              { name: "Sushi Palace", address: "Alter Postweg 20, Buxtehude" },
              { name: "s'Fachl", address: "Breite Straße 17, Buxtehude" },
            ].map((location, i) => (
              <Card
                key={i}
                className="border-2 hover:border-christmas-red/50 transition-all hover:shadow-lg bg-card/90 backdrop-blur-sm"
              >
                <CardContent className="pt-6 pb-6 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-christmas-red/10 text-christmas-red flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2">{location.name}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{location.address}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Card className="inline-block border-2 border-christmas-green/30 bg-christmas-green/5 backdrop-blur-sm">
              <CardContent className="pt-6 pb-6 px-8">
                <p className="text-sm text-muted-foreground">
                  <Gift className="inline h-4 w-4 text-christmas-green mr-2" />
                  Alle Verkaufsstellen befinden sich in Buxtehude und Umgebung
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="prizes"
                className="bg-gradient-to-br from-christmas-gold/10 to-christmas-red/10 border-2 border-christmas-gold/30 rounded-2xl px-6 shadow-lg"
              >
                <AccordionTrigger className="text-left hover:no-underline py-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-christmas-gold/20 text-christmas-gold flex items-center justify-center flex-shrink-0">
                      <Gift className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-1">Die 24 Geschenke</h3>
                      <p className="text-sm text-muted-foreground">Klicken um alle Gutscheine zu sehen</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-8">
                  <div className="pt-4 space-y-4">
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      <span className="font-semibold text-christmas-red">Spoileralarm!</span> Wenn du wissen möchtest,
                      welche 24 Geschenke dich erwarten, findest du hier alle Gutscheine im Überblick. Für alle
                      Gutscheine gibt es Einlösebedingungen, z.B. den Zeitraum der Gültigkeit. Die genauen Bedingungen
                      sind auf dem jeweiligen Gutschein vermerkt.
                    </p>

                    <div className="grid gap-3">
                      {[
                        { name: "Amadeus", gift: "1 Mal Nachos mit Jalapeno- und Salsa-Sauce" },
                        { name: "Bunte Kinderkiste", gift: "1 große weihnachtliche Überraschungstüte für Kinder" },
                        { name: "Buxtehuder SV", gift: "Beim Kauf deines Tickets ein zweites Ticket gratis dazu" },
                        { name: "Café Docé", gift: "1 Pastei de Natas pro Person für 1–2 Personen" },
                        { name: "Das Futterhaus Buxtehude", gift: "1 Spezial-Tüte für Hund oder Katze" },
                        { name: "Das Futterhaus Buxtehude", gift: "1 Paket Meisenknödel" },
                        { name: "Ernsting's family", gift: "20 % Rabatt auf deinen Einkauf" },
                        {
                          name: "EURONICS Wiegel",
                          gift: "1 Mal Staubsaugerbeutel oder 20 € Rabatt auf Arbeitskosten bei TV-Service",
                        },
                        {
                          name: "Flamingo Grill",
                          gift: "1 großes Fladenbrot mit 2 Dips (scharf) oder 1 Baklava ab 20 € Rechnungsbetrag",
                        },
                        { name: "Hermann – Schönes Leben", gift: "1 großes Glaswindlicht / Teelicht mit Designoption" },
                        { name: "Kreativ Bastelparadies", gift: "5 € Rabatt" },
                        { name: "lenya natürlich!", gift: "1 Paar Designer-Socken nach Wahl" },
                        { name: "Märchenhaft", gift: "1 Spezial-Knobi-Pitabrot mit Aioli" },
                        { name: "Mundfein Pizzawerkstatt", gift: "1 Pizza 26 cm Margherita, Salami oder Thunfisch" },
                        {
                          name: "Nähatelier kreativer Faden",
                          gift: "Stoff / Material für Kindernähkurs gratis + 25 % Rabatt auf den Kurspreis",
                        },
                        { name: "Obsthof Brunckhorst", gift: "1 große Tüte Äpfel mit einem leckeren Rezept" },
                        { name: "PfefferTörtchen", gift: "1 Stück hausgemachten Kuchen nach Wahl" },
                        { name: "Ringfoto Schattke", gift: "6 Handybilder ausgedruckt" },
                        { name: "s'Fachl", gift: "Die Tüte der Woche (Gummibären)" },
                        { name: "Smash'lt Burger", gift: "10 € Rabatt bei Abholung einer Bestellung ab 30 €" },
                        { name: "Stil & Blüte", gift: "1 adventliches Überraschungsgeschenk" },
                        {
                          name: "Sushi Palace",
                          gift: "eine Variante der Tempura-Sushi gratis bei Abholung deiner Sushi-Bestellung",
                        },
                        { name: "Taj Mahal", gift: "1 Vorspeise deiner Wahl aus der Karte gratis im Restaurant" },
                        {
                          name: "Ludwig von Karpff",
                          gift: "1 Flasche Fiore del Sud Primitivo Susumaniello 0,75 l bei Einkauf ab 25 €",
                        },
                      ].map((item, i) => (
                        <Card key={i} className="hover:shadow-md transition-shadow bg-card border">
                          <CardContent className="p-4">
                            <div className="flex flex-col md:flex-row md:items-center gap-3">
                              <div className="flex-shrink-0">
                                <div className="w-8 h-8 rounded-lg bg-christmas-red/10 text-christmas-red flex items-center justify-center font-bold text-sm">
                                  {i + 1}
                                </div>
                              </div>
                              <div className="flex-1 grid md:grid-cols-2 gap-3">
                                <div className="font-semibold text-sm">{item.name}</div>
                                <div className="text-muted-foreground text-sm">{item.gift}</div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Häufige Fragen</h2>
            <p className="text-xl text-muted-foreground">Alles, was du wissen musst</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  q: "Was kostet der Kalender?",
                  a: "Der Buxtehude Erlebnis-Adventskalender 2025 kostet 21,50 €. Damit erhältst du 24 Gutscheine mit einem Gesamtwert von etwa 200 €.",
                },
                {
                  q: "Wie hoch ist der Gesamtwert der Geschenke?",
                  a: "Der Gesamtwert aller 24 Gutscheine und Geschenke beträgt etwa 200 €. Das ist fast das 10-fache des Kaufpreises!",
                },
                {
                  q: "Wie funktionieren die Gutscheine?",
                  a: "Jeden Tag im Dezember öffnest du ein Türchen und findest einen Gutschein für ein teilnehmendes Unternehmen in Buxtehude. Diesen kannst du dann vor Ort einlösen.",
                },
                {
                  q: "Wie lange sind die Gutscheine gültig?",
                  a: "Die genauen Einlösebedingungen und Gültigkeitszeiträume sind auf jedem einzelnen Gutschein vermerkt. Bitte beachte diese Angaben beim Einlösen.",
                },
                {
                  q: "Wohin fließen die Spenden?",
                  a: "Die Erlöse aus dem Kalenderverkauf unterstützen die Jugendarbeit des Buxtehuder SV und den Altstadtverein bei seiner Arbeit für eine lebenswerte Innenstadt. Je mehr Kalender verkauft werden, desto höher sind die Spenden!",
                },
                {
                  q: "Kann ich mehrere Kalender kaufen?",
                  a: "Ja, natürlich! Die Kalender eignen sich hervorragend als Geschenk für Familie, Freunde und Kollegen. Solange der Vorrat reicht, kannst du so viele Kalender kaufen, wie du möchtest.",
                },
                {
                  q: "Ab wann gibt es den Kalender zu kaufen?",
                  a: "Der Kalender ist ab sofort erhältlich – sowohl online als auch in den teilnehmenden Verkaufsstellen in Buxtehude. Aber Achtung: nur solange der Vorrat reicht!",
                },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="bg-card border rounded-xl px-6">
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="font-semibold pr-4">{faq.q}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">Kontakt</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Du hast Fragen zum Buxtehude Erlebnis-Adventskalender 2025? Schreib uns gern eine E-Mail.
            </p>

            <Card className="border-2 bg-card shadow-lg">
              <CardContent className="pt-8 pb-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-christmas-red/10 text-christmas-red mx-auto">
                    <Mail className="h-8 w-8" />
                  </div>
                  <Button
                    size="lg"
                    className="bg-christmas-red hover:bg-christmas-red/90 text-white w-full max-w-md mx-auto"
                    asChild
                  >
                    <a href="mailto:Marc.Maerz@edneo.de">
                      <Mail className="h-5 w-5 mr-2" />
                      E-Mail senden
                    </a>
                  </Button>
                  <p className="text-sm text-muted-foreground">Marc.Maerz@edneo.de</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-muted/50 border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              {/* Brand */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Gift className="h-6 w-6 text-christmas-red" />
                  <span className="font-bold text-lg">Buxtehude</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Der Erlebnis-Adventskalender für Buxtehude – 24 Geschenke, lokale Unternehmen, gute Zwecke.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-semibold mb-4">Schnelllinks</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#kalender" className="text-muted-foreground hover:text-christmas-red transition-colors">
                      Kalender kaufen
                    </a>
                  </li>
                  <li>
                    <a
                      href="#verkaufsstellen"
                      className="text-muted-foreground hover:text-christmas-red transition-colors"
                    >
                      Verkaufsstellen
                    </a>
                  </li>
                  <li>
                    <a href="#faq" className="text-muted-foreground hover:text-christmas-red transition-colors">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href="#kontakt" className="text-muted-foreground hover:text-christmas-red transition-colors">
                      Kontakt
                    </a>
                  </li>
                </ul>
              </div>

              {/* Über uns */}
              <div>
                <h4 className="font-semibold mb-4">Über uns</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#spenden" className="text-muted-foreground hover:text-christmas-red transition-colors">
                      Spendenprojekte
                    </a>
                  </li>
                  <li>
                    <a href="#teilnehmer" className="text-muted-foreground hover:text-christmas-red transition-colors">
                      Teilnehmende Unternehmen
                    </a>
                  </li>
                  <li>
                    <Link
                      href="/impressum"
                      className="text-muted-foreground hover:text-christmas-red transition-colors"
                    >
                      Impressum
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Social Media */}
              <div>
                <h4 className="font-semibold mb-4">Folge uns</h4>
                <div className="flex gap-3">
                  <a
                    href="https://facebook.com/BuxtehudeAdventskalender2025"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-christmas-red/10 text-christmas-red flex items-center justify-center hover:bg-christmas-red hover:text-white transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="https://instagram.com/Buxtehude_Adventskalender"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-christmas-red/10 text-christmas-red flex items-center justify-center hover:bg-christmas-red hover:text-white transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
                <p className="text-xs text-muted-foreground mt-4">Verpasse keine Gewinnspiele und Updates!</p>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-8 border-t border-border">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                <p>© 2025 Buxtehude Erlebnis-Adventskalender. Alle Rechte vorbehalten.</p>
                <p>
                  Ein Projekt von{" "}
                  <a
                    href="https://sspeag.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-christmas-red hover:underline"
                  >
                    SSPE AG
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-6 right-6 z-40">
        <Button
          size="lg"
          className="bg-christmas-red hover:bg-christmas-red/90 text-white shadow-2xl rounded-full h-14 px-6 animate-pulse hover:animate-none hover:scale-105 transition-all"
        >
          <Gift className="h-5 w-5 mr-2" />
          Jetzt kaufen!
        </Button>
      </div>
    </div>
  )
}
