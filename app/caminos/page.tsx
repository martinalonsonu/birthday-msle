"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

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

      <div className="bg-white/80 backdrop-blur-sm w-full max-w-md p-6 rounded-3xl shadow-2xl text-black border border-pink-100 relative overflow-hidden">
        <p className="text-center text-2xl mb-2 font-bold text-black">
          No es una sorpresa ruidosa.
        </p>
        <p className="text-center text-lg text-black mb-6">
          Es algo para leer sin prisa,
          <br />
          como se leen las cosas que importan.
        </p>

        <div className="mb-4 text-center">
          <p className="text-sm text-pink-500">Puedes elegir por dónde ir.</p>
          <p className="text-sm text-pink-500">No hay orden correcto.</p>
        </div>

        <div className="grid grid-cols-1 gap-3">
          <button
            onClick={() => router.push("/caminos/lo-que-siento")}
            className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-3 rounded-2xl hover:scale-[1.02] transform transition duration-200 shadow-lg"
            aria-label="Lo que siento"
          >
            💓 Lo que siento
          </button>

          <button
            onClick={() => router.push("/caminos/lo-que-me-pasa")}
            className="w-full bg-rose-500 text-white py-3 rounded-2xl hover:scale-[1.02] transform transition duration-200 shadow-lg"
            aria-label="Lo que me pasa"
          >
            🌬️ Lo que me pasa
          </button>

          <button
            onClick={() => router.push("/caminos/lo-que-cuida")}
            className="w-full bg-pink-400 text-white py-3 rounded-2xl hover:scale-[1.02] transform transition duration-200 shadow-lg"
            aria-label="Lo que cuido"
          >
            🌿 Lo que cuido
          </button>

          <button
            onClick={() => router.push("/caminos/hoy")}
            className="w-full bg-pink-300 text-white py-3 rounded-2xl hover:scale-[1.02] transform transition duration-200 shadow-lg"
            aria-label="Hoy"
          >
            ✨ Hoy
          </button>
        </div>

        <p className="mt-6 text-pink-400 text-sm text-center">
          Toma tu tiempo — no hay prisa
        </p>
        <button
          onClick={() => router.push("/")}
          className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-3 rounded-2xl hover:scale-[1.02] transform transition duration-200 shadow-lg mt-4"
          aria-label="Hoy"
        >
          👋 Terminar y volver al inicio
        </button>
      </div>
    </div>
  );
}
