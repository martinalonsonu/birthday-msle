"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoQueSiento() {
  const router = useRouter();
  const [idx, setIdx] = React.useState(0);

  const screens = [
    {
      title: "Lo que siento",
      lines: [
        "no es prisa.",
        "No es necesidad.",
        "",
        "Es algo tranquilo",
        "que aparece",
        "cuando pienso en ti.",
      ],
      imgSrc: "/01.png",
      imgAlt: "foto juntos",
    },
    {
      title: "Es pensar en ti",
      lines: [
        "sin forzar nada.",
        "",
        "Pensarte",
        "en medio del día,",
        "cuando todo está normal",
        "y aún así me sacas una sonrisa.",
      ],
      imgSrc: "/02.png",
      imgAlt: "foto juntos",
    },
    {
      title: "No siempre es claro",
      lines: [
        "ni perfecto.",
        "",
        "A veces",
        "todo es un poco borroso,",
        "pero igual se siente real.",
      ],
      imgSrc: "/03.png",
      imgAlt: "foto borrosa",
    },
    {
      title: "Y hay momentos",
      lines: [
        "que se quedan.",
        "",
        "Sin aviso.",
        "Sin planes.",
        "",
        "Este fue uno de esos.",
      ],
      imgSrc: "/04.png",
      imgAlt: "primer beso",
    },
  ];

  const screen = screens[idx];

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 font-sans p-6">
      <div className="bg-white/85 backdrop-blur-sm w-full max-w-md p-6 rounded-3xl shadow-2xl text-black border border-pink-100 relative overflow-hidden">
        <div className="w-full mb-4 rounded-xl bg-pink-100 flex items-center justify-center overflow-hidden min-h-[176px] md:min-h-[200px]">
          {screen.imgSrc ? (
            <div className="relative w-full h-[360px] md:h-[520px]">
              <Image
                src={screen.imgSrc}
                alt={screen.title}
                fill
                className="object-contain"
                sizes="(max-width:768px) 90vw, 448px"
              />
            </div>
          ) : (
            <div className="w-full h-44 md:h-56 bg-pink-100 flex items-center justify-center text-pink-300 text-4xl">
              💖
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
              className="flex-1 bg-pink-300 text-white py-2 rounded-2xl hover:opacity-95 transition shadow"
            >
              Volver a elegir
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
