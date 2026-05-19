"use client";

import { useSound } from "use-sound";

export function useButtonSound() {
  const [play] = useSound("/sounds/button-click.wav", {
    volume: 0.4,
    interrupt: true,
  });

  return play;
}
