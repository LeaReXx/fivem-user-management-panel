import type React from "react";
import { Suspense } from "react";
import PageHeader from "@/components/d/shared/page header/PageHeader";
import ShopProductItem from "@/components/d/shared/shop/ShopProductItem";
import ShopHeader from "@/components/d/shop/shop header/ShopHeader";
import ShopHeaderSkeleton from "@/components/loading/page/d/shop/ShopHeaderSkeleton";
import { products } from "@/data/product";

const ShopPage: React.FC = () => {
  return (
    <div className="p-4 w-full bg-linear-to-t from-content-box-bg-color-1 to-content-box-bg-color-2 backdrop-blur-[2px] rounded-lg min-h-[500px]">
      <div className="flex md:justify-between md:items-center flex-col md:flex-row gap-4 md:gap-0">
        <PageHeader title="فروشگاه" iconName="shopping-bag" />
        <Suspense fallback={<ShopHeaderSkeleton />}>
          <ShopHeader />
        </Suspense>
      </div>

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
