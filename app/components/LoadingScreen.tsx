"use client";

import React from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [textIndex, setTextIndex] = React.useState(0);

  const texts = [
    "No sabía qué regalarte...",
    "Así que hice algo muy mío...",
    "Con calma...",
    "Ok, espera un segundo...",
    "Ya casi...",
    "Ahora sí...",
  ];

  React.useEffect(() => {
    // Change text every 2 seconds
    const textInterval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % texts.length);
    }, 1300);

    // Complete after 6 seconds
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 7800);

    return () => {
      clearInterval(textInterval);
      clearTimeout(completeTimer);
    };
  }, [onComplete, texts.length]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 font-sans p-6 relative overflow-hidden">
      <div className="flex flex-col items-center justify-center gap-6">
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 border-4 border-transparent border-t-pink-500 border-r-pink-400 rounded-full animate-spin"></div>
          <div
            className="absolute inset-2 border-4 border-transparent border-b-rose-500 border-l-pink-300 rounded-full animate-spin"
            style={{ animationDirection: "reverse", animationDuration: "1.5s" }}
          ></div>
        </div>
        <div className="h-8 flex items-center">
          <p className="text-xl font-semibold text-black text-center max-w-sm transition-all duration-300">
            {texts[textIndex]}
          </p>
        </div>
      </div>
    </div>
  );
}
