"use client";

import { useState } from "react";

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";

import { geoCentroid } from "d3-geo";

const geoUrl = "/data/liberia-counties.json";

type CountyProperties = {
  name: string;
  id?: string | number;
  source?: string;
};

function getCountyUrl(countyName: string) {
  const normalizedName = countyName.trim().toLowerCase();

  if (normalizedName === "river cess") {
    return "/counties/rivercess";
  }

  if (normalizedName === "river gee") {
    return "/counties/rivergee";
  }

  return `/counties/${normalizedName.replace(/\s+/g, "-")}`;
}

export default function LiberiaInteractiveMap() {
  const [hoveredCounty, setHoveredCounty] = useState<string | null>(null);
  const [selectedCounty, setSelectedCounty] = useState<string | null>(null);

  return (
    <div className="w-full max-w-5xl mx-auto">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          center: [-9.5, 6.5],
          scale: 9000,
        }}
        className="w-full h-auto"
      >
        <ZoomableGroup center={[-9.5, 6.5]} zoom={1}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const properties =
                  geo.properties as CountyProperties;

                const countyName = properties.name;
                const centroid = geoCentroid(geo);

                const isActive =
                  hoveredCounty === countyName ||
                  selectedCounty === countyName;

                return (
                  <g key={geo.rsmKey}>
                    <Geography
                      geography={geo}
                      fill={isActive ? "#15803d" : "#16a34a"}
                      stroke="#ffffff"
                      strokeWidth={isActive ? 1.5 : 0.8}
                      style={{
                        outline: "none",
                        cursor: "pointer",
                      }}
                      onMouseEnter={() => {
                        setHoveredCounty(countyName);
                      }}
                      onMouseLeave={() => {
                        setHoveredCounty(null);
                      }}
                      onClick={() => {
                        if (selectedCounty === countyName) {
                          window.location.href =
                            getCountyUrl(countyName);
                        } else {
                          setSelectedCounty(countyName);
                        }
                      }}
                      role="link"
                      aria-label={`View ${countyName} County`}
                    />

                    <Marker coordinates={centroid}>
                      <text
                        textAnchor="middle"
                        dominantBaseline="central"
                        style={{
                          fontFamily: "Arial, sans-serif",
                          fontSize: "7px",
                          fontWeight: "700",
                          fill: "#ffffff",
                          pointerEvents: "none",
                        }}
                      >
                        {countyName}
                      </text>
                    </Marker>
                  </g>
                );
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>

      {(hoveredCounty || selectedCounty) && (
        <div className="mt-3 text-center font-semibold">
          {hoveredCounty || selectedCounty} County
          {selectedCounty && !hoveredCounty && (
            <span className="ml-2 font-normal">
              — Tap again to open the county page
            </span>
          )}
          {hoveredCounty && (
            <span className="ml-2 font-normal">
              — Click to open the county page
            </span>
          )}
        </div>
      )}
    </div>
  );
}