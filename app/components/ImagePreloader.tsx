"use client";

import { useEffect } from "react";
import { PUBLIC_IMAGES } from "@/app/lib/publicImages";

export function ImagePreloader() {
  useEffect(() => {
    // Precarga todas las imágenes usando fetch para forzar descarga real
    const preloadImage = async (src: string) => {
      try {
        // Usar la URL de Next.js Image API con parámetros de optimización
        const url = `/_next/image?url=${encodeURIComponent(src)}&w=1200&q=80`;
        await fetch(url, { priority: "low" } as RequestInit);
      } catch (error) {
        console.warn(`Failed to preload image: ${src}`);
      }
    };

    // Precarga todas las imágenes en orden
    PUBLIC_IMAGES.forEach((imageSrc, index) => {
      // Agregar pequeño delay entre precargas para no saturar la red
      setTimeout(() => {
        preloadImage(imageSrc);
      }, index * 100);
    });

    console.log(`Starting preload of ${PUBLIC_IMAGES.length} images`);
  }, []);

  return null; // Este componente no renderiza nada
}
