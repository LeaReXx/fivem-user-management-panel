import PageHeader from "@/components/d/shared/page header/PageHeader";
import FinancialSummary from "@/components/d/wallet/financial summary/FinancialSummary";
import React from "react";

const WalletPage: React.FC = () => {
  return (
    <div className="p-4 w-full bg-gradient-to-t from-content-box-bg-color-1 to-content-box-bg-color-2 backdrop-blur-[2px] rounded-lg">
      <PageHeader title="کیف پول" iconName="wallet" />
      <FinancialSummary />
    </div>
  );
};

export default WalletPage;
