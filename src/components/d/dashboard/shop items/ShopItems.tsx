import React from "react";
import BoxHeader from "../../shared/box header/BoxHeader";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ShopItems: React.FC = () => {
  return (
    <div className="order-3 col-span-12 bg-gradient-to-t from-secondary-box-background/90 to-main-box-background/90 backdrop-blur-[2px] h-[400px] rounded-lg p-4">
      <BoxHeader title="آخرین ایتم های فروشگاه" iconName="shopping-bag">
        <Button variant="link" size="sm" asChild>
          <Link href="/login">مشاهده همه</Link>
        </Button>
      </BoxHeader>
    </div>
  );
};

export default ShopItems;
