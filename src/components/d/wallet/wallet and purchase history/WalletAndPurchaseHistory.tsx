import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Car, History } from "lucide-react";
import WalletHistory from "./wallet history/WalletHistory";
import ShopPurchaseHistory from "./shop purchase history/ShopPurchaseHistory";
const WalletAndPurchaseHistory = () => {
  return (
    <div className="mt-4 w-full rounded-lg">
      <Tabs defaultValue="wallet-history" className="w-full gap-0">
        <TabsList className="bg-inside-box-bg-color rounded-b-none h-18 flex-col items-start min-[475px]:items-center min-[475px]:flex-row min-[475px]:h-9 min-[475px]: flex-wrap">
          <TabsTrigger
            value="wallet-history"
            className="w-full justify-start min-[475px]:justify-center"
          >
            <History strokeWidth={1.5} />
            تاریخچه کیف پول
          </TabsTrigger>
          <TabsTrigger
            value="shop-history"
            className="w-full justify-start min-[475px]:justify-center"
          >
            <Car strokeWidth={1.5} />
            تاریخچه خرید از فروشگاه
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="wallet-history"
          className="bg-inside-box-bg-color p-4 rounded-lg rounded-tr-none"
        >
          <WalletHistory />
        </TabsContent>
        <TabsContent
          value="shop-history"
          className="bg-inside-box-bg-color p-4 rounded-lg rounded-tr-none"
        >
          <ShopPurchaseHistory />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default WalletAndPurchaseHistory;
