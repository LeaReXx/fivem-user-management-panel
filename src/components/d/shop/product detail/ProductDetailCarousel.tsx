"use client";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import NoImageHolder from "../../shared/shop/NoImageHolder";

const ProductDetailCarousel = ({
  images,
  title,
}: {
  images: string[];
  title: string;
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    direction: "rtl",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  if (images.length === 0) {
    return (
      <div className="aspect-video overflow-hidden rounded-lg flex">
        <NoImageHolder />
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-lg" ref={emblaRef}>
        <div className="flex">
          {images.map((img, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 aspect-video">
              <img
                src={img}
                alt={`${title} - تصویر ${index + 1}`}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={() => emblaApi?.scrollNext()}
            className="absolute cursor-pointer left-4 top-1/2 flex items-center justify-center -translate-y-1/2 bg-black/40 hover:bg-black/60 text-brand-color p-2 rounded-full transition-colors"
            aria-label="تصویر بعدی"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => emblaApi?.scrollPrev()}
            className="absolute cursor-pointer right-4 top-1/2 flex items-center justify-center -translate-y-1/2 bg-black/40 hover:bg-black/60 text-brand-color p-2 rounded-full transition-colors"
            aria-label="تصویر قبلی"
          >
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center gap-2 mt-4 absolute bottom-3 right-1/2 translate-x-1/2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === selectedIndex
                    ? "bg-brand-color w-5"
                    : "bg-black/40 hover:bg-black/60 cursor-pointer"
                }`}
                aria-label={`رفتن به تصویر ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetailCarousel;
