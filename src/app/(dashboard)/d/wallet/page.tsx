import PageHeader from "@/components/d/shared/page header/PageHeader";
import FinancialSummary from "@/components/d/wallet/financial summary/FinancialSummary";
import WalletAndPurchaseHistory from "@/components/d/wallet/wallet and purchase history/WalletAndPurchaseHistory";

const WalletPage: React.FC = () => {
  return (
    <div className="p-4 w-full bg-linear-to-t from-content-box-bg-color-1 to-content-box-bg-color-2 backdrop-blur-[2px] rounded-lg">
      <PageHeader title="کیف پول" iconName="wallet" />
      <FinancialSummary />
      <WalletAndPurchaseHistory />
    </div>
  );
};

export default WalletPage;
