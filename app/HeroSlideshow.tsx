"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  {
    src: "/hogwash/owner-rig.jpg",
    alt: "Hogwash Exterior Cleaning owner standing beside the fully equipped service trailer",
    caption: "Owner-operated. The rig that shows up.",
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
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="100vw"
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
