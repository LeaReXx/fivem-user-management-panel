"use client";
import { Minus, Plus, Wallet } from "lucide-react";
import { useState } from "react";
import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import type { Product } from "@/types/product.types";

const ProductDetailBox: React.FC<Omit<Product, "images" | "productId">> = ({
  price,
  stock,
  title,
  discountPercentage,
}) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (value >= 1 && value <= 10) {
      setQuantity(value);
    }
  };

  // محاسبه تخفیف و قیمت نهایی
  const discountAmount = price * (discountPercentage / 100);
  const priceAfterDiscount = price - discountAmount;
  const totalPrice = priceAfterDiscount * quantity;
  const totalDiscount = discountAmount * quantity;

  return (
    <div className="bg-inside-box-bg-color rounded-lg p-4 h-full">
      <h1 className="text-xl font-medium h-14 overflow-hidden">{title}</h1>
      <div className="border-2 border-main-text-color/30 border-dashed rounded-md p-2 space-y-3">
        <div className="justify-between flex items-center font-normal">
          <span>قیمت واحد</span>
          <span>{price.toLocaleString()} تومان</span>
        </div>
        {discountPercentage > 0 && (
          <div className="justify-between flex items-center font-normal">
            <span>درصد تخفیف</span>
            <span className="text-red-500 dark:text-red-400 font-medium">
              {discountPercentage}%
            </span>
          </div>
        )}
        <div className="justify-between flex items-center font-normal">
          <span>تعداد</span>
          <span className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleDecrease}
              disabled={quantity <= 1}
              className="w-7 h-7 flex items-center justify-center cursor-pointer rounded-sm bg-input-color disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Minus size={18} strokeWidth={1.5} />
            </button>
            <input
              type="number"
              value={quantity}
              onChange={handleInputChange}
              min={1}
              max={10}
              className="h-7 w-10 overflow-hidden outline-0 rounded-sm text-center bg-input-color"
            />
            <button
              type="button"
              onClick={handleIncrease}
              disabled={quantity >= 10 || quantity === stock}
              className="w-7 h-7 flex items-center justify-center cursor-pointer rounded-sm bg-input-color disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Plus size={18} strokeWidth={1.5} />
            </button>
          </span>
        </div>
        <div className="mt-16 space-y-3">
          {discountPercentage > 0 && (
            <div className="justify-between flex items-center font-normal">
              <span>مبلغ کل تخفیف</span>
              <span className="text-red-500 dark:text-red-400">
                {totalDiscount.toLocaleString()} تومان
              </span>
            </div>
          )}
          <div className="justify-between flex items-center font-semibold text-lg">
            <span>مبلغ قابل پرداخت</span>
            {discountPercentage === 100 ? (
              <span>رایگان</span>
            ) : (
              <span>{totalPrice.toLocaleString()} تومان</span>
            )}
          </div>
        </div>
      </div>
      <div>
        <Button className="w-full h-14 text-lg mt-4">
          <Wallet className="size-6" strokeWidth={1.5} />
          <span className="border-s border-gray-100/30 ps-2">
            پرداخت با کیف پول
          </span>
        </Button>
      </div>
      <div className="w-full mt-2">
        <Alert variant="warning" className="p-2 text-sm" icon="info">
          <span>پس از پرداخت مبلغ از موجودی کیف پول کسر خواهد شد</span>
        </Alert>
      </div>
    </div>
  );
};
export default ProductDetailBox;
