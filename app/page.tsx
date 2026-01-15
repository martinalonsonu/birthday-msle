"use client";

import React from "react";

export default function Home() {
  const [secretWord, setSecretWord] = React.useState("");
  const [loading, setLoading] = React.useState(false);
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
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 font-sans p-6">
      <div className="bg-white/80 backdrop-blur-sm w-full max-w-md p-6 rounded-3xl shadow-2xl text-black border border-pink-100 relative overflow-hidden">
        <span className="absolute -top-8 -right-4 text-6xl opacity-20 transform rotate-12 animate-pulse">
          💖
        </span>
        <span className="absolute -left-6 -bottom-8 text-5xl opacity-15 transform -rotate-12 animate-bounce">
          💕
        </span>
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
