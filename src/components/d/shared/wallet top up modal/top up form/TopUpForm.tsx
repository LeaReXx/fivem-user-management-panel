import Input from "@/components/ui/Input";
import { useForm, Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { CreditCard, Rabbit } from "lucide-react";

const RECHARGE_INPUT_MIN_VALUE = 10000;
const RECHARGE_INPUT_MAX_VALUE = 1000000;
const FAST_CHARGE_AMOUNTS = [50000, 100000, 300000, 500000];
const TopUpForm = () => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<{ rechargeAmount: number }>({
    defaultValues: {
      rechargeAmount: RECHARGE_INPUT_MIN_VALUE,
    },
  });
  const formOnSubmit = (data: { rechargeAmount: number }) => {
    console.log(data);
  };

  const formatNumber = (value: string | number) => {
    const numValue =
      typeof value === "string" ? value.replace(/[^\d]/g, "") : String(value);
    if (!numValue) return "";
    return Number(numValue).toLocaleString("en-US");
  };

  const parseNumber = (value: string) => {
    const numValue = value.replace(/[^\d]/g, "");
    return numValue ? Number(numValue) : 0;
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit(formOnSubmit)} className="space-y-2">
        <div className="flex flex-col gap-1">
          <label htmlFor="rechargeAmount">مبلغ مورد نظر را وارد کنید</label>
          <Controller
            name="rechargeAmount"
            control={control}
            rules={{
              required: `مبلغ شارژ باید حداقل ${RECHARGE_INPUT_MIN_VALUE.toLocaleString(
                "en-US"
              )} تومان یا حداکثر ${RECHARGE_INPUT_MAX_VALUE.toLocaleString(
                "en-US"
              )} تومان باشد`,
              min: {
                value: RECHARGE_INPUT_MIN_VALUE,
                message: `حداقل مبلغ شارژ کیف پول ${RECHARGE_INPUT_MIN_VALUE.toLocaleString(
                  "en-US"
                )} تومان است`,
              },
              max: {
                value: RECHARGE_INPUT_MAX_VALUE,
                message: `حداکثر مبلغ شارژ کیف پول ${RECHARGE_INPUT_MAX_VALUE.toLocaleString(
                  "en-US"
                )} تومان است`,
              },
            }}
            render={({ field }) => (
              <div className="relative">
                <span
                  className={`absolute  left-5 z-10 opacity-70 text-lg ${
                    errors.rechargeAmount?.message
                      ? "top-1/2 -translate-y-7.5"
                      : "top-1/2 -translate-y-1/2"
                  }`}
                >
                  تومان
                </span>
                <Input
                  type="text"
                  value={formatNumber(field.value)}
                  maxLength={9}
                  onChange={(e) => {
                    const parsedValue = parseNumber(e.target.value);
                    field.onChange(parsedValue);
                  }}
                  onBlur={field.onBlur}
                  error={errors.rechargeAmount?.message}
                />
              </div>
            )}
          />
        </div>
        <div className="mt-4 space-y-2">
          <div className="flex gap-1">
            <Rabbit strokeWidth={1.5} size={22} />
            <p>شارژ سریع</p>
          </div>
          <div className="flex gap-1 sm:gap-2 justify-between">
            {FAST_CHARGE_AMOUNTS.map((item) => (
              <Button
                key={item}
                type="button"
                variant="outline"
                className="border-dashed hover:bg-inherit hover:opacity-80"
                onClick={() => setValue("rechargeAmount", item)}
              >
                {item.toLocaleString()}
              </Button>
            ))}
          </div>
        </div>
        <div className="mt-6">
          <Button type="submit" className="w-full text-lg h-12">
            <CreditCard className="size-7" strokeWidth={1.5} />
            پرداخت
          </Button>
        </div>
      </form>
    </div>
  );
};

export default TopUpForm;
