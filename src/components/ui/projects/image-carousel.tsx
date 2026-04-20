"use client";

import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "../carousel";

export function ImageCarousel({ images }: { images: string[] }) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  if (!images || images.length === 0) return null;

  return (
    <div className="w-full flex flex-col items-center px-12 sm:px-16">
      <Carousel setApi={setApi} className="w-full max-w-70 sm:max-w-xs p-2">
        <CarouselContent>
          {images.map((item, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full aspect-1177/2560 p-1 flex items-center justify-center">
                <Image
                  src={item}
                  alt={`Image ${index}`}
                  fill
                  className="object-cover rounded-3xl shadow-lg select-none"
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex cursor-pointer" />
        <CarouselNext className="hidden sm:flex cursor-pointer" />
      </Carousel>

      <div className="py-1 text-center text-sm text-muted-foreground font-medium">
        {current} out of {count}
      </div>
    </div>
  );
}
