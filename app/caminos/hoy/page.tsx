"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ImageWithLoader } from "@/app/components/ImageWithLoader";

export default function Hoy() {
  const router = useRouter();
  const [idx, setIdx] = React.useState(0);

  const screens = [
    {
      title: "Hoy",
      lines: [
        "no piensa en el después.",
        "",
        "No adelanta historias.",
        "",
        "Hoy",
        "simplemente pasa.",
      ],
      imgSrc: "/12.jpeg",
      imgAlt: "bailando",
    },
    {
      title: "Y hoy",
      lines: [
        "se disfruta.",
        "",
        "Se ríe.",
        "Se comparte.",
        "",
        "Se guarda",
        "sin darle demasiadas vueltas.",
      ],
      imgSrc: "/13.jpeg",
      imgAlt: "dándole de comer",
    },
    {
      title: "Yo estoy aquí",
      lines: [
        "en este hoy.",
        "",
        "Sin apurar nada.",
        "",
        "Solo caminando contigo",
        "un paso a la vez.",
      ],
      imgSrc: "/14.jpeg",
      imgAlt: "mano tomada",
    },
  ];

  const screen = screens[idx];

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 font-sans p-6 relative overflow-hidden">
      {/* Emojis animados de fondo */}
      <span className="absolute top-10 left-10 text-6xl opacity-20 animate-pulse">
        💖
      </span>
      <span className="absolute top-20 right-20 text-5xl opacity-15 animate-bounce">
        ✨
      </span>
      <span className="absolute bottom-20 left-20 text-5xl opacity-20 animate-pulse">
        💕
      </span>
      <span className="absolute bottom-10 right-10 text-6xl opacity-15 animate-bounce">
        🌸
      </span>
      <span className="absolute top-1/2 left-8 text-4xl opacity-10 animate-pulse">
        🎀
      </span>
      <span className="absolute top-1/3 right-8 text-5xl opacity-20 animate-bounce">
        💝
      </span>
      <span className="absolute bottom-1/3 right-20 text-4xl opacity-15 animate-pulse">
        🌹
      </span>
      <span className="absolute bottom-1/4 left-1/4 text-5xl opacity-10 animate-bounce">
        🦋
      </span>
      <span className="absolute top-1/4 left-1/3 text-5xl opacity-20 animate-pulse">
        🎉
      </span>
      <span className="absolute top-2/3 right-1/4 text-4xl opacity-15 animate-bounce">
        💐
      </span>
      <span className="absolute bottom-1/3 left-1/2 text-5xl opacity-10 animate-pulse">
        🌺
      </span>
      <span className="absolute top-1/3 left-2/3 text-4xl opacity-20 animate-bounce">
        👑
      </span>
      <span className="absolute bottom-2/3 left-3/4 text-6xl opacity-15 animate-pulse">
        💕
      </span>
      <span className="absolute top-3/4 right-1/3 text-5xl opacity-10 animate-bounce">
        🌷
      </span>
      <span className="absolute bottom-1/4 right-1/3 text-4xl opacity-20 animate-pulse">
        ✨
      </span>
      <span className="absolute top-1/2 right-1/4 text-5xl opacity-15 animate-bounce">
        💫
      </span>

      <div className="bg-white/85 backdrop-blur-sm w-full max-w-md p-6 rounded-3xl shadow-2xl text-black border border-pink-100 relative overflow-hidden">
        <div className="w-full mb-4 rounded-xl bg-pink-100 flex items-center justify-center overflow-hidden min-h-44 md:min-h-50">
          {screen.imgSrc ? (
            <div className="relative w-full h-90 md:h-130">
              <ImageWithLoader
                src={screen.imgSrc}
                alt={screen.title}
                fill
                className="object-contain"
                sizes="(max-width:768px) 90vw, 448px"
                loading="lazy"
                quality={80}
              />
            </div>
          ) : (
            <div className="w-full h-44 md:h-56 bg-pink-100 flex items-center justify-center text-amber-300 text-4xl">
              ✨
            </div>
          )}
        </div>

        <h2 className="text-center text-2xl font-semibold text-black">
          {screen.title}
        </h2>
        <div className="mt-3 text-center text-black whitespace-pre-line">
          {screen.lines.map((l, i) => (
            <p key={i} className="leading-6">
              {l}
            </p>
          ))}
        </div>

        <div className="flex gap-3 mt-6">
          {idx > 0 && (
            <button
              onClick={() => setIdx((s) => s - 1)}
              className="flex-1 bg-pink-200 text-pink-800 py-2 rounded-2xl hover:opacity-90 transition"
            >
              Anterior
            </button>
          )}

          {idx < screens.length - 1 ? (
            <button
              onClick={() => setIdx((s) => s + 1)}
              className="flex-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white py-2 rounded-2xl hover:scale-[1.02] transition shadow-lg"
            >
              Siguiente
            </button>
          ) : (
            <button
              onClick={() => router.push("/caminos")}
              className="flex-1 bg-pink-300 text-white py-2 rounded-2xl"
            >
              Volver a elegir
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
