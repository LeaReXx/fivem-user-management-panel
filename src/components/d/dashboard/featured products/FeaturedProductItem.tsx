import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Vibrant } from "node-vibrant/browser";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
interface FeaturedProductItemProps {
  title: string;
  description?: string;
  imageUrl?: string;
  link?: string;
  price?: number;
  discountPercentage?: number;
}

const FeaturedProductItem: React.FC<FeaturedProductItemProps> = ({
  title,
  description,
  imageUrl,
  link,
  price,
  discountPercentage,
}) => {
  const [bgColor, setBgColor] = useState("");
  const discountedPrice =
    price && discountPercentage
      ? price - (price * discountPercentage) / 100
      : price;

  const content = (
    <div className="flex-[0_0_70%] sm:flex-[0_0_40%] md:flex-[0_0_30%] xl:flex-[0_0_25%] 2xl:flex-[0_0_18%] group overflow-hidden rounded-lg border-border/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 h-full hover:scale-105 ease-linear">
      <div className="p-0">
        {/* تصویر محصول */}
        <div
          className={`relative aspect-1/1 overflow-hidden bg-muted cursor-pointer`}
        >
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={title}
              quality={100}
              onLoad={() => {
                Vibrant.from(imageUrl)
                  .getPalette()
                  .then((palette) => {
                    setBgColor(palette.DarkVibrant?.hex || "");
                  });
              }}
              fill
              className="object-cover select-none transition-transform duration-400 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
              <svg
                className="w-16 h-16"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          )}

          {/* Badge تخفیف */}
          {discountPercentage && discountPercentage > 0 && (
            <Badge
              variant="destructive"
              className="absolute top-2 right-2 font-medium shadow-lg"
            >
              {discountPercentage}% تخفیف
            </Badge>
          )}
        </div>

        {/* اطلاعات محصول */}
        <div className="p-2 space-y-2 relative">
          <div
            className="absolute top-0 left-0 w-full h-full -z-10"
            style={{
              background: bgColor
                ? `linear-gradient(to bottom, var(--bg-main-color) 0%, ${bgColor}40 100%)`
                : "var(--bg-main-color)",
            }}
          ></div>
          {/* عنوان */}
          <h3 className="font-medium text-md line-clamp-2 min-h-[3rem] cursor-pointer">
            {title}
          </h3>
          <div>
            <Button size="sm">
              <ShoppingBag /> خرید محصول
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

  if (link) {
    return (
      <Link href={link} className="block h-full">
        {content}
      </Link>
    );
  }

  return content;
};

export default FeaturedProductItem;
