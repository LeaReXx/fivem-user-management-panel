import ShopSearch from "./shop search/ShopSearch";
import ShopFilter from "./shop filter/ShopFilter";

const ShopHeader: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 sm:gap-0 sm:justify-between sm:items-center sm:flex-row md:w-2/3">
      <ShopSearch />
      <ShopFilter />
    </div>
  );
};
export default ShopHeader;
