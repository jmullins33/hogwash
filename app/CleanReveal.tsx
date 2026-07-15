"use client";

import { useState } from "react";

export default function CleanReveal() {
  const [position, setPosition] = useState(56);

  function setSafePosition(next: number) {
    setPosition(Math.max(8, Math.min(92, next)));
  }

  function updatePosition(clientX: number, left: number, width: number) {
    const next = ((clientX - left) / width) * 100;
    setSafePosition(next);
  }

  return (
    <div
      className="reveal"
      role="slider"
      tabIndex={0}
      aria-label="Dirty to clean concrete reveal"
      aria-valuemin={8}
      aria-valuemax={92}
      aria-valuenow={Math.round(position)}
      aria-valuetext={`${Math.round(position)} percent clean reveal shown`}
      aria-describedby="reveal-instructions"
      style={{ "--reveal": `${position}%` } as React.CSSProperties}
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        updatePosition(event.clientX, rect.left, rect.width);
      }}
      onPointerDown={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        updatePosition(event.clientX, rect.left, rect.width);
      }}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft" || event.key === "ArrowDown") {
          event.preventDefault();
          setSafePosition(position - 6);
        }

        if (event.key === "ArrowRight" || event.key === "ArrowUp") {
          event.preventDefault();
          setSafePosition(position + 6);
        }

        if (event.key === "Home") {
          event.preventDefault();
          setSafePosition(8);
        }

        if (event.key === "End") {
          event.preventDefault();
          setSafePosition(92);
        }
      }}
    >
      <p className="sr-only" id="reveal-instructions">
        Use the left and right arrow keys to move the cleaning reveal.
      </p>
      <div className="reveal__clean">
        <span>Clean concrete. Clear first impressions.</span>
      </div>
      <div className="reveal__dirty" aria-hidden="true">
        <span>Drag to clear the grime.</span>
      </div>
      <div className="reveal__wand" aria-hidden="true">
        <span className="reveal__spray" />
      </div>
    </div>
  );
}
