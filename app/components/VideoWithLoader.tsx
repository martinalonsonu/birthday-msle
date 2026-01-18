"use client";

import { useState, useMemo, VideoHTMLAttributes } from "react";

interface VideoWithLoaderProps extends VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  loaderColor?: string;
}

export function VideoWithLoader({
  loaderColor = "pink",
  src,
  ...props
}: VideoWithLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);

  const loaderBgColor = loaderColor === "pink" ? "bg-pink-100" : "bg-gray-100";
  const loaderSpinnerColor =
    loaderColor === "pink" ? "border-pink-400" : "border-gray-400";

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <div
          className={`absolute inset-0 ${loaderBgColor} flex items-center justify-center z-10`}
        >
          <div
            className={`w-8 h-8 border-4 ${loaderSpinnerColor} border-t-transparent rounded-full animate-spin`}
          />
        </div>
      )}
      <video
        src={src}
        {...props}
        onCanPlay={() => setIsLoading(false)}
        onLoadStart={() => setIsLoading(true)}
        className="w-full h-full object-contain"
      />
    </div>
  );
}
