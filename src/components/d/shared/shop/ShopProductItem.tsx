"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Vibrant } from "node-vibrant/browser";
import { Package } from "lucide-react";
import { Image as ImageIcon } from "lucide-react";
import NoImageHolder from "./NoImageHolder";

interface ShopProductItemProps {
  title: string;
  imageUrl?: string;
  productId: string;
  price: number;
  discountPercentage: number;
  stock: number;
}

const calculateDiscountedPrice = (price: number, discount: number) => {
  if (discount > 0) {
    return Math.round(price - (price * discount) / 100);
  }
  return price;
};

const ShopProductItem: React.FC<ShopProductItemProps> = ({
  title,
  imageUrl,
  productId,
  price,
  discountPercentage,
  stock,
}) => {
  const [mainImageColor, setMainImageColor] = useState("");

  const discountedPrice = calculateDiscountedPrice(price, discountPercentage);

  const getImageColorPlate = () => {
    if (imageUrl) {
      Vibrant.from(imageUrl)
        .getPalette()
        .then((palette) => {
          setMainImageColor(palette.Vibrant?.hex || "#ffffff50");
        });
    }
  };

  const isFree = price === 0 || discountPercentage === 100;

  return (
    <Link
      href={`/d/shop/${productId}`}
      className="group overflow-hidden rounded-md backdrop-blur-sm transition-scale duration-300 hover:shadow-md h-full hover:scale-103 ease-linear cursor-pointer"
      style={{
        borderBottom: `3px solid ${stock !== 0 ? mainImageColor : "#ffffff50"}`,
      }}
    >
      <div>
        <div className="relative aspect-1/1 overflow-hidden bg-gray-500">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={title}
              quality={100}
              onLoad={getImageColorPlate}
              fill
              className={`object-cover select-none transition-scale duration-400 group-hover:scale-105 ${
                stock === 0 && "grayscale opacity-70"
              }`}
            />
          ) : (
            <NoImageHolder />
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
            className="absolute bg-inside-box-bg-color transform-scale top-0 left-0 w-full h-full -z-10"
            style={{
              background:
                mainImageColor && stock !== 0
                  ? `linear-gradient(to top, var(--bg-inside-box) 0%, ${mainImageColor}50 100%)`
                  : "var(--bg-inside-box)",
            }}
          ></div>

          {/* عنوان */}
          <h3 className="font-medium text-md line-clamp-2 h-[3rem]">{title}</h3>

          {/* قیمت و موجودی */}
          <div className="flex items-end justify-between h-9">
            {stock > 0 ? (
              <Badge className="[&>svg]:size-4.5 text-sm bg-blue-500 font-normal items-center">
                <Package strokeWidth={1.5} size={20} />
                <span>{stock} موجود</span>
              </Badge>
            ) : (
              <Badge className="[&>svg]:size-4.5 text-sm bg-gray-500 font-normal items-center">
                <Package strokeWidth={1.5} size={20} />
                <span>ناموجود</span>
              </Badge>
            )}

            <div
              className={`flex flex-col items-end -space-y-1 ${
                stock !== 0 ? "" : "hidden"
              }`}
            >
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

export default ShopProductItem;
