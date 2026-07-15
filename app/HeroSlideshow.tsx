"use client";

import { useEffect, useState } from "react";
import ImageSlot from "./ImageSlot";

const slides = [
  {
    src: "/hogwash/driveway.jpg",
    alt: "Before and after of a home driveway, dirty concrete restored to clean",
    caption: "Driveways brought back to life",
  },
  {
    src: "/hogwash/gazebo.jpg",
    alt: "Before and after of a poolside wooden gazebo, weathered gray wood restored to warm brown",
    caption: "Decks, patios & wood restored",
  },
  {
    src: "/hogwash/garage.jpg",
    alt: "Before and after of a garage door and concrete apron on a metal building",
    caption: "Garages, barns & entryways",
  },
];

export default function HeroSlideshow() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (slides.length < 2) {
      return;
    }

    const id = setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 5200);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <div className="hero-slides">
        {slides.map((slide, index) => (
          <div
            className={`hero-slide${index === active ? " hero-slide--active" : ""}`}
            key={slide.src}
          >
            <ImageSlot
              src={slide.src}
              alt={slide.alt}
              label="Hero photo"
              priority={index === 0}
            />
          </div>
        ))}
      </div>
      {slides[active].caption ? (
        <p className="hero-slide__caption">{slides[active].caption}</p>
      ) : null}
      {slides.length > 1 ? (
        <div className="hero-slides__dots">
          {slides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              aria-label={`Show photo ${index + 1} of ${slides.length}`}
              aria-pressed={index === active}
              className={index === active ? "is-active" : undefined}
              onClick={() => setActive(index)}
            />
          ))}
        </div>
      ) : null}
    </>
  );
}
