"use client";

import { useState } from "react";

const surfaces = [
  {
    label: "Concrete",
    title: "Driveways, sidewalks & patios",
    text: "Surface cleaning lifts years of buildup out of concrete — evenly, edge to edge, without wand stripes. Oil spots, algae shadows, and tire marks don't stand a chance.",
  },
  {
    label: "Homes",
    title: "House washing",
    text: "Gentle, low-pressure washing for siding and trim that removes algae and grime without forcing water where it doesn't belong.",
  },
  {
    label: "Decks",
    title: "Decks, fences & gazebos",
    text: "Wood washed back to its real color without chewing up the grain — ready to stain, seal, or just enjoy again.",
  },
  {
    label: "Trailers",
    title: "RVs, trailers & containers",
    text: "Campers, rigs, and storage containers cleaned with the right touch for painted metal and fiberglass — no swirl marks, no stripped decals.",
  },
  {
    label: "Commercial",
    title: "Storefronts & light commercial",
    text: "Entrances, walkways, and pads kept clean enough to match the business inside. First impressions start at the curb.",
  },
];

export default function SurfaceTabs() {
  const [active, setActive] = useState(0);
  const current = surfaces[active];

  return (
    <>
      <div className="surface-tabs" aria-label="Common cleaning categories">
        {surfaces.map((surface, index) => (
          <button
            key={surface.label}
            type="button"
            aria-pressed={index === active}
            className={index === active ? "is-active" : undefined}
            onClick={() => setActive(index)}
          >
            {surface.label}
          </button>
        ))}
      </div>
      <div className="feature-grid">
        <article className="feature-card feature-card--wide" aria-live="polite">
          <h3>{current.title}</h3>
          <p>{current.text}</p>
        </article>
      </div>
    </>
  );
}
