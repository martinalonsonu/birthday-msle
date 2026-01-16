"use client";

import React from "react";
import { LoadingScreen } from "@/app/components/LoadingScreen";

export default function Home() {
  const [secretWord, setSecretWord] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [showLoadingScreen, setShowLoadingScreen] = React.useState(true);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (secretWord.toLowerCase() === "preciosa") {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        window.location.href = "/caminos";
      }, 2000);
    } else {
      alert("Palabra secreta incorrecta. Estás cerca ⭐");
    }
  };

  if (showLoadingScreen) {
    return <LoadingScreen onComplete={() => setShowLoadingScreen(false)} />;
  }

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
          ¡Bienvenida!
        </p>
        <h1 className="text-xl font-semibold text-center text-black">
          🔐 No hace falta contraseña
        </h1>
        <p className="mt-2 mb-4 text-center text-pink-400">
          Solo una palabra que tenga sentido ✨
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            className="w-full border border-pink-200 bg-white rounded-2xl p-3 placeholder-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-300 transition"
            placeholder="Escribe la palabra secreta"
            onChange={(e) => {
              setSecretWord(e.target.value);
            }}
          />
          <button
            type="submit"
            className={`mt-4 w-full ${
              loading
                ? "bg-pink-200"
                : "bg-gradient-to-r from-pink-500 to-rose-500"
            } text-white py-3 rounded-2xl hover:scale-[1.02] transform transition duration-200 shadow-lg disabled:opacity-70`}
            disabled={loading}
          >
            {loading ? "Cargando…" : "Entrar ❤️"}
          </button>
        </form>
        <p className="mt-5 text-pink-400 text-sm text-center">
          Pista: Es posiblemente la palabra que más utilizo en nuestro chat (386
          veces y contando)
        </p>
      </div>
    </div>
  );
}
