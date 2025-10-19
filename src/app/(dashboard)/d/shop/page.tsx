import ShopProductItem from "@/components/d/shared/shop/ShopProductItem";
import ShopHeader from "@/components/d/shop/shop header/ShopHeader";
import { products } from "@/data/product";
import React, { Suspense } from "react";

const ShopPage: React.FC = () => {
  return (
    <div className="p-4 w-full bg-gradient-to-t from-content-box-bg-color-1 to-content-box-bg-color-2 backdrop-blur-[2px] rounded-lg min-h-[500px]">
      <Suspense fallback={<div>Loading...</div>}>
        <ShopHeader />
      </Suspense>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 mt-6">
        {products.map((product, index) => (
          <ShopProductItem
            key={index}
            stock={product.stock}
            title={product.title}
            price={product.price}
            discountPercentage={product.discountPercentage}
            imageUrl={product.images[0]}
            productId={product.productId}
          />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
