import PageHeader from "@/components/d/shared/page header/PageHeader";
import FinancialSummary from "@/components/d/wallet/financial summary/FinancialSummary";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Car, History } from "lucide-react";

const WalletPage: React.FC = () => {
  return (
    <div className="p-4 w-full bg-gradient-to-t from-content-box-bg-color-1 to-content-box-bg-color-2 backdrop-blur-[2px] rounded-lg">
      <PageHeader title="کیف پول" iconName="wallet" />
      <FinancialSummary />
      <div className="mt-4 bg-inside-box-bg-color w-full rounded-lg p-4">
        <Tabs defaultValue="wallet-history" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="wallet-history">
              <History strokeWidth={1.5} />
              تاریخچه کیف پول
            </TabsTrigger>
            <TabsTrigger value="shop-history">
              <Car strokeWidth={1.5} />
              تاریخچه خرید از فروشگاه
            </TabsTrigger>
          </TabsList>
          <TabsContent value="wallet-history">تاریخچه کیف پول</TabsContent>
          <TabsContent value="shop-history">
            تاریخچه خرید از فروشگاه
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default WalletPage;
