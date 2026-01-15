"use client";

import Image from "next/image";
import { PUBLIC_IMAGES } from "@/app/lib/publicImages";

export function ImagePreloader() {
  return (
    <div className="hidden">
      {/* Renderizar todas las imágenes escondidas para que Next.js las cachee */}
      {PUBLIC_IMAGES.map((imageSrc) => (
        <Image
          key={imageSrc}
          src={imageSrc}
          alt="preload"
          width={1200}
          height={800}
          quality={80}
          priority={false}
          style={{ display: "none" }}
          onLoadingComplete={() => {
            console.log(`Cached: ${imageSrc}`);
          }}
        />
      ))}
    </div>
  );
}
