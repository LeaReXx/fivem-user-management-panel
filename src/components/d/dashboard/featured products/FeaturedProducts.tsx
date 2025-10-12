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
  stock: number;
};

const FeaturedProducts: React.FC = () => {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 1,
    direction: "rtl",
  });

  const products: Product[] = [
    {
      title: "ماشین Revuelto 2024",
      img: "/images/revuelto-2024.jpg",
      price: 5000000,
      discountPercentage: 100,
      link: "/products/revuelto-2024",
      stock: 10,
    },
    {
      title: "ماشین EQS 2022",
      img: "/images/EQS2022.jpg",
      price: 100000,
      discountPercentage: 0,
      link: "/products/eqs-2022",
      stock: 5,
    },
    {
      title: "ماشین Purosangue 2024",
      img: "/images/purosangue-2024.jpg",
      price: 200000,
      discountPercentage: 22,
      link: "/products/purosangue-2024",
      stock: 8,
    },
    {
      title: "ماشین 992 GT3 RS 2024",
      img: "/images/992-gt3-rs.jpg",
      price: 400000,
      discountPercentage: 0,
      link: "/products/992-gt3-rs",
      stock: 5,
    },
    {
      title: "ماشین SL 63 AMG 2024",
      img: "/images/sl-63-amg.jpg",
      price: 700000,
      discountPercentage: 0,
      link: "/products/sl-63-amg",
      stock: 0,
    },
    {
      title: "ماشین Tesla Model S Plaid 2021",
      img: "/images/tesla-model-s-plaid.jpg",
      price: 1200000,
      discountPercentage: 35,
      link: "/products/tesla-model-s-plaid",
      stock: 2,
    },
    {
      title: "ماشین Maserati Quattroporte 2019",
      img: "/images/maserati-quattroporte.jpg",
      price: 500000,
      discountPercentage: 15,
      link: "/products/maserati-quattroporte",
      stock: 2,
    },
    {
      title: "Exclusive GTA V Vehicle: Oppressor Mk II",
      img: "",
      price: 900000,
      discountPercentage: 20,
      link: "/products/oppressor-mk2",
      stock: 1,
    },
    {
      title: "Exclusive GTA V Weapon Pack",
      img: "",
      price: 150000,
      discountPercentage: 10,
      link: "/products/weapon-pack",
      stock: 2,
    },
    {
      title: "Exclusive GTA V Clothing Bundle",
      img: "",
      price: 120000,
      discountPercentage: 18,
      link: "/products/clothing-bundle",
      stock: 10,
    },
  ];

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
            <FeaturedProductItem
              key={index}
              stock={product.stock}
              title={product.title}
              price={product.price}
              discountPercentage={product.discountPercentage}
              imageUrl={product.img}
              link={product.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
