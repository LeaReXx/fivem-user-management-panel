"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import BoxHeader from "../../shared/box header/BoxHeader";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ShopProductItem from "../../shared/shop/ShopProductItem";
import { products } from "@/data/product";

const FeaturedProducts: React.FC = () => {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 1,
    direction: "rtl",
  });

  return (
    <div className="order-3 col-span-12 bg-gradient-to-t from-content-box-bg-color-1 to-content-box-bg-color-2 min-h-[400px] rounded-lg p-4">
      <BoxHeader title="آخرین ایتم های فروشگاه" iconName="shopping-bag">
        <Button variant="link" size="sm" asChild>
          <Link href="/login">مشاهده همه</Link>
        </Button>
      </BoxHeader>

      <div className="overflow-hidden pt-4 pb-4" ref={emblaRef}>
        <div className="flex gap-4 ps-2">
          {products.map((product, index) => (
            <div className="overflow-hidden rounded-md flex-[0_0_70%] sm:flex-[0_0_40%] md:flex-[0_0_30%] xl:flex-[0_0_25%] 2xl:flex-[0_0_18%]">
              <ShopProductItem
                key={index}
                stock={product.stock}
                title={product.title}
                price={product.price}
                discountPercentage={product.discountPercentage}
                imageUrl={product.images[0]}
                productId={product.productId}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
