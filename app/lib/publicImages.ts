// List of public images to be used across the caminos pages
export const PUBLIC_IMAGES = [
  "/01.jpg",
  "/02.jpg",
  "/03.jpg",
  "/04.jpg",
  "/05.jpg",
  "/06.jpg",
  "/07.jpg",
  "/08.jpg",
  "/09.jpg",
  "/10.jpg",
  "/11.jpg",
  "/12.jpeg",
  "/13.jpeg",
  "/14.jpeg",
];

// Deterministic allocation for caminos. Each camino receives a block of images starting
// at a fixed offset to avoid randomness and make the assignment predictable.
const BASE_OFFSET: Record<string, number> = {
  "lo-que-siento": 0,
  "lo-que-me-pasa": 4,
  "lo-que-cuida": 8,
  hoy: 12,
};

export function allocateImagesForPath(pathKey: string, count: number) {
  const start = BASE_OFFSET[pathKey] ?? 0;
  return Array.from(
    { length: count },
    (_, i) => PUBLIC_IMAGES[(start + i) % PUBLIC_IMAGES.length]
  );
}
