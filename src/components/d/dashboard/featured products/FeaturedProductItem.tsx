import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Vibrant } from "node-vibrant/browser";
import { Warehouse } from "lucide-react";

interface FeaturedProductItemProps {
  title: string;
  imageUrl?: string;
  link: string;
  price: number;
  discountPercentage: number;
  stock: number; // تعداد موجودی
}

const calculateDiscountedPrice = (price: number, discount: number) => {
  if (discount > 0) {
    return Math.round(price - (price * discount) / 100);
  }
  return price;
};

const FeaturedProductItem: React.FC<FeaturedProductItemProps> = ({
  title,
  imageUrl,
  link,
  price,
  discountPercentage,
  stock,
}) => {
  const [bgColor, setBgColor] = useState("");

  const discountedPrice = calculateDiscountedPrice(price, discountPercentage);

  const getImageMainPlate = () => {
    if (imageUrl) {
      Vibrant.from(imageUrl)
        .getPalette()
        .then((palette) => {
          setBgColor(palette.DarkVibrant?.hex || "");
        });
    }
  };

  const isFree = price === 0 || discountPercentage === 100;

  return (
    <Link
      href={link}
      className="flex-[0_0_70%] sm:flex-[0_0_40%] md:flex-[0_0_30%] xl:flex-[0_0_25%] 2xl:flex-[0_0_18%] group overflow-hidden rounded-md backdrop-blur-sm transition-all duration-300 hover:shadow-md h-full hover:scale-103 ease-linear cursor-pointer"
      style={{ borderBottom: `3px solid ${bgColor}` }}
    >
      <div>
        <div className="relative aspect-1/1 overflow-hidden bg-gray-500">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={title}
              quality={100}
              onLoad={getImageMainPlate}
              fill
              className={`object-cover select-none transition-transform duration-400 group-hover:scale-105 ${
                stock === 0 && "grayscale opacity-70"
              }`}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                className="w-16 h-16"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          )}

          {discountPercentage > 0 && stock !== 0 && (
            <Badge
              variant="destructive"
              className="absolute top-2 right-2 shadow-md"
            >
              {discountPercentage}% تخفیف
            </Badge>
          )}
        </div>

        <div className="p-2 space-y-2 relative">
          <div
            className="absolute top-0 left-0 w-full h-full -z-10"
            style={{
              background: bgColor
                ? `linear-gradient(to top, var(--bg-main-color) 0%, ${bgColor}50 100%)`
                : "var(--bg-main-color)",
            }}
          ></div>

          {/* عنوان */}
          <h3 className="font-medium text-md line-clamp-2 h-[3rem]">{title}</h3>

          {/* قیمت و موجودی */}
          <div className="flex items-end justify-between h-9">
            {stock > 0 ? (
              <Badge className="[&>svg]:size-4.5 text-sm bg-blue-500/50 font-normal items-center">
                <Warehouse strokeWidth={1.5} size={20} />
                <span>{stock} موجود</span>
              </Badge>
            ) : (
              <Badge className="[&>svg]:size-4.5 text-sm bg-gray-500/50 items-center">
                <Warehouse strokeWidth={1.5} size={20} />
                <span>ناموجود</span>
              </Badge>
            )}

            <div className="flex flex-col items-end -space-y-1">
              {isFree ? (
                <>
                  {price > 0 && (
                    <sup className="text-sm opacity-50 line-through me-3">
                      {price.toLocaleString()} تومان
                    </sup>
                  )}
                  <span className="font-medium text-green-600">رایـگان</span>
                </>
              ) : (
                <>
                  {discountPercentage > 0 && (
                    <sup className="text-sm opacity-50 line-through me-3">
                      {price.toLocaleString()} تومان
                    </sup>
                  )}
                  <span className="font-medium">
                    {discountedPrice.toLocaleString()} تومان
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedProductItem;
