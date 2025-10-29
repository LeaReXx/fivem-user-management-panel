import { Plus, Wallet } from "lucide-react";
import { useQueryState } from "nuqs";
import WalletTopUpModal from "../wallet top up modal/WalletTopUpModal";

const WalletInfo: React.FC = () => {
  const [_isOpenWalletTopUpModal, setIsOpenWalletTopUpModal] =
    useQueryState("topup");
  const handleOpenTopUpModal = () => {
    setIsOpenWalletTopUpModal("open");
  };

  return (
    <>
      <button
        type="button"
        className="flex gap-2 items-center hover:bg-white/10 py-1 px-2 rounded-md cursor-pointer group"
        onClick={handleOpenTopUpModal}
        aria-label="باز کردن مودال شارژ کیف پول"
      >
        <div className="bg-brand-color p-2 rounded-full flex items-center justify-center gap-2 text-sm">
          <Wallet
            strokeWidth={1.5}
            size={26}
            color="#ffffff"
            className="group-hover:hidden"
          />
          <Plus
            strokeWidth={1.5}
            size={26}
            color="#ffffff"
            className="hidden group-hover:block"
          />
        </div>
        <div className="-space-y-1">
          <p className="font-medium">کیف پول</p>
          <span className="text-sm">موجودی: 350,000 تومان</span>
        </div>
      </button>
      <WalletTopUpModal />
    </>
  );
};

export default WalletInfo;
