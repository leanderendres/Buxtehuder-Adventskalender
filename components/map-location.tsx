"use client"

import { Card, CardContent } from "@/components/ui/card"
import { MapPin, ShoppingCart, ExternalLink } from "lucide-react"
import { useState } from "react"

interface Location {
  name: string
  address: string
  lat: number
  lng: number
  website: string
}

const locations: Location[] = [
  {
    name: "Bunte Kinderkiste",
    address: "St.-Petri-Platz 1–3, Buxtehude",
    lat: 53.4733,
    lng: 9.6933,
    website: "https://buntekinderkiste.com/",
  },
  {
    name: "Buxtehuder SV Fanshop",
    address: "Viverstraße 2, Buxtehude",
    lat: 53.4715,
    lng: 9.6885,
    website: "https://www.bsv-live.de/shop/",
  },
  {
    name: "Das Futterhaus Buxtehude",
    address: "Konrad-Adenauer-Allee 3b, Buxtehude",
    lat: 53.4695,
    lng: 9.6805,
    website: "https://www.futterhaus.de/service/filialen/buxtehude/",
  },
  {
    name: "EURONICS Wiegel",
    address: "Zwischen den Brücken 1, Buxtehude",
    lat: 53.4725,
    lng: 9.6915,
    website: "https://www.euronics.de/buxtehude-wiegel",
  },
  {
    name: "Hermann – Schönes Leben",
    address: "Nordviver 2, Buxtehude",
    lat: 53.4745,
    lng: 9.6945,
    website: "https://www.hermann-schoenes-leben.de/",
  },
  {
    name: "Kreativ Bastelparadies",
    address: "Bahnhofstraße 5, Buxtehude",
    lat: 53.4705,
    lng: 9.6895,
    website: "https://kreativ-bastelparadies.de/",
  },
  {
    name: "Stil & Blüte",
    address: "Viverstraße 2, Buxtehude",
    lat: 53.4715,
    lng: 9.6885,
    website: "https://www.instagram.com/stilbluete_buxtehude/?hl=de",
  },
  {
    name: "Sushi Palace",
    address: "Alter Postweg 20, Buxtehude",
    lat: 53.4685,
    lng: 9.6825,
    website: "https://www.sushi-palace.com/",
  },
  {
    name: "s'Fachl",
    address: "Breite Straße 17, Buxtehude",
    lat: 53.4735,
    lng: 9.6925,
    website: "https://www.fachl.at/de-at/Standorte/Deutschland/s-Fachl-Buxtehude",
  },
]

export function MapLocation() {
  const [hoveredLocation, setHoveredLocation] = useState<Location | null>(null)

  // Create markers parameter for Google Maps with custom shopping cart icon
  const markersParam = locations.map((loc) => `markers=color:red%7Clabel:🛒%7C${loc.lat},${loc.lng}`).join("&")

  const center = `${locations[0].lat},${locations[0].lng}`
  const mapUrl = `https://www.google.com/maps/embed/v1/view?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&center=${center}&zoom=14&${markersParam}`

  return (
    <div className="space-y-6">
      <div className="relative w-full h-[500px] rounded-2xl overflow-hidden border-2 border-border shadow-lg">
        <iframe
          src={mapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="transition-all"
        />
      </div>

      {/* Location List with Hover and Click to Visit */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {locations.map((location, i) => (
          <a
            key={i}
            href={location.website}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
            onMouseEnter={() => setHoveredLocation(location)}
            onMouseLeave={() => setHoveredLocation(null)}
          >
            <Card className="hover:shadow-lg transition-all cursor-pointer hover:border-christmas-red/50 bg-card h-full group-hover:scale-105">
              <CardContent className="p-4">
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-christmas-red/10 text-christmas-red flex items-center justify-center relative group-hover:bg-christmas-red group-hover:text-white transition-colors">
                      <MapPin className="h-5 w-5 absolute" />
                      <ShoppingCart className="h-3 w-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-sm truncate">{location.name}</h4>
                      <ExternalLink className="h-3 w-3 text-muted-foreground flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-xs text-muted-foreground line-clamp-2">{location.address}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </div>
  )
}
