"use client";

import { useEffect } from "react";
import { PUBLIC_IMAGES } from "@/app/lib/publicImages";

export function ImagePreloader() {
  useEffect(() => {
    // Precarga todas las imágenes en segundo plano
    const preloadImage = (src: string) => {
      const img = new Image();
      img.src = src;
    };

    // Precarga todas las imágenes
    PUBLIC_IMAGES.forEach((imageSrc) => {
      preloadImage(imageSrc);
    });

    // Opcional: Log para verificar que la precarga se realizó
    console.log(`Preloaded ${PUBLIC_IMAGES.length} images`);
  }, []);

  return null; // Este componente no renderiza nada
}
