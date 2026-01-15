"use client";

import Image from "next/image";
import { PUBLIC_IMAGES } from "@/app/lib/publicImages";

export function ImagePreloader() {
  // Precargamos con múltiples tamaños porque Next.js optimiza según el viewport
  // Los tamaños corresponden a los sizes usados en los componentes: (max-width:768px) 90vw, 448px
  const preloadSizes = [
    { width: 448, height: 650 }, // Desktop: 448px
    { width: 336, height: 488 }, // Tablet: 90vw (~80% de 400px)
    { width: 270, height: 391 }, // Mobile: 90vw (~80% de 300px)
  ];

  return (
    <div className="hidden">
      {/* Renderizar todas las imágenes en múltiples tamaños para que Next.js las cachee */}
      {PUBLIC_IMAGES.flatMap((imageSrc) =>
        preloadSizes.map((size, idx) => (
          <Image
            key={`${imageSrc}-${idx}`}
            src={imageSrc}
            alt="preload"
            width={size.width}
            height={size.height}
            quality={80}
            priority={false}
            style={{ display: "none" }}
          />
        ))
      )}
    </div>
  );
}
