import { Product } from "@/components/d/dashboard/featured products/FeaturedProducts";
import ShopProductItem from "@/components/d/shared/shop/ShopProductItem";
import ShopHeader from "@/components/d/shop/shop header/ShopHeader";
import React from "react";

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

const ShopPage: React.FC = () => {
  return (
    <div className="p-4 w-full">
      <ShopHeader />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 mt-6">
        {products.map((product, index) => (
          <ShopProductItem
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
  );
};

export default ShopPage;
