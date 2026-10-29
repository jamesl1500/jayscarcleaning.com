'use client';

import Image from 'next/image';
import { useState } from 'react';

// Drag-to-compare slider. A native range input drives it, so it works with
// touch, mouse and keyboard without custom gesture code.
export default function BeforeAfter({ before, after, alt }: { before: string; after: string; alt: string }) {
  const [pos, setPos] = useState(50);

  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-navy-800 select-none">
      <Image src={after} alt={`After: ${alt}`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <Image src={before} alt={`Before: ${alt}`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow" style={{ left: `${pos}%` }}>
        <span className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-navy-900 shadow-lg">
          ⇆
        </span>
      </div>
      <span className="pointer-events-none absolute top-3 left-3 rounded-full bg-navy-900/80 px-3 py-1 text-xs font-semibold text-white">
        Before
      </span>
      <span className="pointer-events-none absolute top-3 right-3 rounded-full bg-teal-400 px-3 py-1 text-xs font-semibold text-navy-900">
        After
      </span>
      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label={`Compare before and after: ${alt}`}
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}
