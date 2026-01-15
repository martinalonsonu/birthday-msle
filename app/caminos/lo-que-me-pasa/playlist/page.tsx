"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function Playlist() {
  const router = useRouter();

  const songs = [
    {
      title: "Salto - El joven Paiva",
      url: "https://open.spotify.com/intl-es/track/24ihFGZFQ3S1ONWMKaVbTF?si=fac37518a0984879",
    },
    {
      title: "Lunares - Jaze (mi fav)",
      url: "https://open.spotify.com/intl-es/track/48eI8VxzKYyx1ngnimIVHs?si=3cc8bba1b503451c",
    },
    {
      title: "El vino y el tiempo - Jaze",
      url: "https://open.spotify.com/intl-es/track/6hJ6Y0suDpcIpbkC1tOdnp?si=2da0cc5f5fde44ce",
    },
    {
      title: "Solo - Bacilos (pegadísimo jaja)",
      url: "https://open.spotify.com/intl-es/track/1Eq1rLe3L1yBuDX9ACIpQW?si=aabc660d97c0410a",
    },
    {
      title: "Ninguna igual - Joven Paiva & Gabiboi",
      url: "https://open.spotify.com/intl-es/track/7tzGEt369tDhsbwxdoYhN5?si=68324e56024442dd",
    },
  ];

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 font-sans p-6">
      <div className="bg-white/85 backdrop-blur-sm w-full max-w-md p-6 rounded-3xl shadow-2xl text-black border border-pink-100 relative overflow-hidden">
        <h2 className="text-center text-2xl font-semibold text-black mb-2">
          Hay canciones que no explican nada
        </h2>
        <p className="text-center text-pink-500 mb-4">
          pero siempre me traen a ti sin avisar
        </p>

        <div className="space-y-3">
          {songs.map((s, i) => (
            <a
              key={i}
              href={s.url}
              target="_blank"
              className="block p-3 rounded-lg bg-pink-50 hover:bg-pink-100"
            >
              🎵 {s.title}
            </a>
          ))}
        </div>

        <div className="mt-6">
          <button
            onClick={() => router.push("/caminos")}
            className="w-full bg-pink-300 text-white py-2 rounded-2xl"
          >
            Volver a elegir
          </button>
        </div>
      </div>
    </div>
  );
}
