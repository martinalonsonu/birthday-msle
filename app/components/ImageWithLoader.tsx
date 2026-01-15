'use client';

import { useState } from 'react';
import Image, { ImageProps } from 'next/image';

interface ImageWithLoaderProps extends ImageProps {
  loaderColor?: string;
}

export function ImageWithLoader({
  loaderColor = 'pink',
  ...props
}: ImageWithLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);

  const loaderBgColor = loaderColor === 'pink' ? 'bg-pink-100' : 'bg-gray-100';
  const loaderSpinnerColor = loaderColor === 'pink' ? 'border-pink-400' : 'border-gray-400';

  return (
    <>
      {isLoading && (
        <div className={`absolute inset-0 ${loaderBgColor} flex items-center justify-center`}>
          <div className={`w-8 h-8 border-4 ${loaderSpinnerColor} border-t-transparent rounded-full animate-spin`} />
        </div>
      )}
      <Image
        {...props}
        onLoadingComplete={(result) => {
          setIsLoading(false);
          if (props.onLoadingComplete) {
            props.onLoadingComplete(result);
          }
        }}
      />
    </>
  );
}
