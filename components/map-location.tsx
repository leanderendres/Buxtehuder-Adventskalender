"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { MapPin } from "lucide-react"
import { useState } from "react"

interface Location {
  name: string
  address: string
  lat: number
  lng: number
}

const locations: Location[] = [
  { name: "Bunte Kinderkiste", address: "St.-Petri-Platz 1–3", lat: 53.4733, lng: 9.6933 },
  { name: "Buxtehude SV Fanshop", address: "Viverstraße 2", lat: 53.4715, lng: 9.6885 },
  { name: "Das Futterhaus Buxtehude", address: "Konrad-Adenauer-Allee 3b", lat: 53.4695, lng: 9.6805 },
  { name: "EURONICS Wiegel", address: "Zwischen den Brücken 1", lat: 53.4725, lng: 9.6915 },
  { name: "Hermann – Schönes Leben", address: "Nordviver 2", lat: 53.4745, lng: 9.6945 },
  { name: "Kreativ Bastelparadies", address: "Bahnhofstraße 5", lat: 53.4705, lng: 9.6895 },
  { name: "Stil & Blüte", address: "Viverstraße 2", lat: 53.4715, lng: 9.6885 },
  { name: "Sushi Palace", address: "Alter Postweg 20", lat: 53.4685, lng: 9.6825 },
  { name: "S Fachl", address: "Breite Straße 17", lat: 53.4735, lng: 9.6925 },
]

export function MapLocation() {
  const [hoveredLocation, setHoveredLocation] = useState<Location | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  // Google Maps embed URL with all locations marked
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Buxtehude,Germany&zoom=14`

  return (
    <div className="space-y-6">
      <div
        className="relative w-full h-[500px] rounded-2xl overflow-hidden border-2 border-border shadow-lg group"
        onMouseMove={handleMouseMove}
      >
        <iframe
          src={mapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="transition-all group-hover:saturate-110"
        />

        {/* Hover Info Card */}
        {hoveredLocation && (
          <div
            className="absolute pointer-events-none z-10 transition-opacity"
            style={{
              left: `${mousePosition.x + 15}px`,
              top: `${mousePosition.y + 15}px`,
            }}
          >
            <Card className="shadow-xl border-2 border-christmas-red/20 bg-card/95 backdrop-blur-sm">
              <CardContent className="p-4 min-w-[200px]">
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-christmas-red/10 text-christmas-red flex items-center justify-center">
                      <MapPin className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm mb-1 text-foreground">{hoveredLocation.name}</h4>
                    <p className="text-xs text-muted-foreground">{hoveredLocation.address}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      {/* Location List with Hover */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {locations.map((location, i) => (
          <Card
            key={i}
            className="hover:shadow-md transition-all cursor-pointer hover:border-christmas-red/50 bg-card"
            onMouseEnter={() => setHoveredLocation(location)}
            onMouseLeave={() => setHoveredLocation(null)}
          >
            <CardContent className="p-4">
              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-christmas-red/10 text-christmas-red flex items-center justify-center">
                    <MapPin className="h-5 w-5" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-sm mb-1">{location.name}</h4>
                  <p className="text-xs text-muted-foreground">{location.address}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
