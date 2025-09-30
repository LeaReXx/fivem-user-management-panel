"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import BoxHeader from "../../shared/box header/BoxHeader";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import FeaturedProductItem from "./FeaturedProductItem";

export type Product = {
  title: string;
  img: string;
  price: number;
  discountPercentage: number;
  link: string;
};

const FeaturedProducts: React.FC = () => {
  const [emblaRef] = useEmblaCarousel(
    {
      align: "start",
      slidesToScroll: 1,
      direction: "rtl",
    }
  );

  const products: Product[] = [
    {
      title: "ماشین Revuelto 2024",
      img: "/images/revuelto-2024.jpg",
      price: 50000,
      discountPercentage: 10,
      link: "/products/revuelto-2024",
    },
    {
      title: "ماشین EQS 2022",
      img: "/images/EQS2022.jpg",
      price: 100000,
      discountPercentage: 15,
      link: "/products/eqs-2022",
    },
    {
      title: "ماشین Purosangue 2024",
      img: "/images/purosangue-2024.jpg",
      price: 200000,
      discountPercentage: 20,
      link: "/products/purosangue-2024",
    },
    {
      title: "ماشین 992 GT3 RS 2024",
      img: "/images/992-gt3-rs.jpg",
      price: 400000,
      discountPercentage: 25,
      link: "/products/992-gt3-rs",
    },
    {
      title: "ماشین SL 63 AMG 2024",
      img: "/images/sl-63-amg.jpg",
      price: 700000,
      discountPercentage: 30,
      link: "/products/sl-63-amg",
    },
    {
      title: "ماشین Tesla Model S Plaid 2021",
      img: "/images/tesla-model-s-plaid.jpg",
      price: 1200000,
      discountPercentage: 35,
      link: "/products/tesla-model-s-plaid",
    },
    {
      title: "ماشین Maserati Quattroporte 2019",
      img: "/images/maserati-quattroporte.jpg",
      price: 500000,
      discountPercentage: 15,
      link: "/products/maserati-quattroporte",
    },
    {
      title: "Exclusive GTA V Vehicle: Oppressor Mk II",
      img: "",
      price: 900000,
      discountPercentage: 20,
      link: "/products/oppressor-mk2",
    },
    {
      title: "Exclusive GTA V Weapon Pack",
      img: "",
      price: 150000,
      discountPercentage: 10,
      link: "/products/weapon-pack",
    },
    {
      title: "Exclusive GTA V Clothing Bundle",
      img: "",
      price: 120000,
      discountPercentage: 18,
      link: "/products/clothing-bundle",
    },
  ];

  return (
    <div className="order-3 col-span-12 bg-gradient-to-t from-secondary-box-background/90 to-main-box-background/90 backdrop-blur-[2px] min-h-[400px] rounded-lg p-4">
      <BoxHeader title="آخرین ایتم های فروشگاه" iconName="shopping-bag">
        <Button variant="link" size="sm" asChild>
          <Link href="/login">مشاهده همه</Link>
        </Button>
      </BoxHeader>

      <div className="overflow-hidden pt-4 pb-2" ref={emblaRef}>
        <div className="flex gap-4 ps-2">
          {products.map((product, index) => (
            <FeaturedProductItem
              key={index}
              title={product.title}
              price={product.price}
              discountPercentage={product.discountPercentage}
              description={`Price: $${product.price} (Discount: ${product.discountPercentage}%)`}
              imageUrl={product.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
