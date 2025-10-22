import StatCard from "./stat card/StatCard";

const FinancialSummary = () => {
  return (
    <div className="mt-4 grid grid-cols-12 gap-4">
      <StatCard
        label="موجودی کیف پول"
        iconName="dollar-sign"
        value="350,000 تومان"
      />
      <StatCard
        label="جمع کل تراکنش ها"
        iconName="file-chart-column-increasing"
        value="1,550,000 تومان"
      />
      <StatCard label="تعداد کل تراکنش ها" iconName="clock-4" value="10" />
      <StatCard label="تعداد خرید از فروشگاه" iconName="car" value="5" />
    </div>
  );
};
export default FinancialSummary;
