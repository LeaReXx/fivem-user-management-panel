import { Wallet } from "lucide-react";
import Link from "next/link";
import React from "react";

const WalletInfo: React.FC = () => {
  return (
    <Link href="/d/wallet">
      <div className="flex gap-2 items-center hover:bg-white/10 py-1 px-2 rounded-md cursor-pointer">
        <div className="bg-brand-color p-2 rounded-full flex items-center justify-center gap-2 text-sm">
          <Wallet strokeWidth={1.5} size={26} color="#ffffff" />
        </div>
        <div className="-space-y-1">
          <p className="font-medium">کیف پول</p>
          <span className="text-sm">موجودی: 350,000 تومان</span>
        </div>
      </div>
    </Link>
  );
};

export default WalletInfo;
