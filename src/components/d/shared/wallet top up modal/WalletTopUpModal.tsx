import { useQueryState } from "nuqs";
import Modal from "@/components/ui/modal";
import Input from "@/components/ui/Input";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";

const RECHARGE_INPUT_MIN_VALUE = 10000;
const RECHARGE_INPUT_MAX_VALUE = 1000000;
const WalletTopUpModal = () => {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<{ rechargeAmount: number }>({
    defaultValues: {
      rechargeAmount: RECHARGE_INPUT_MIN_VALUE,
    },
  });
  const [isOpen, setIsOpen] = useQueryState("topup", {
    defaultValue: false,
    parse: (value) => value === "open",
    serialize: (value) => (value ? "open" : ""),
  });

  const handleClose = () => {
    setIsOpen(false);
  };

  const formOnSubmit = (data: { rechargeAmount: number }) => {
    console.log(data);
  };

  return (
    <Modal
      title="شارژ کیف پول"
      isOpen={isOpen}
      onClose={handleClose}
      titleIconName="zap"
    >
      <div>
        <form onSubmit={handleSubmit(formOnSubmit)} className="space-y-2">
          <div className="flex flex-col gap-1">
            <label htmlFor="rechargeAmount">مبلغ مورد نظر را وارد کنید</label>
            <Input
              type="number"
              {...register("rechargeAmount", {
                required: `مبلغ شارژ باید حداقل ${RECHARGE_INPUT_MIN_VALUE.toLocaleString()} تومان یا حداکثر ${RECHARGE_INPUT_MAX_VALUE.toLocaleString()} تومان باشد`,
                min: {
                  value: RECHARGE_INPUT_MIN_VALUE,
                  message: `حداقل مبلغ شارژ کیف پول ${RECHARGE_INPUT_MIN_VALUE.toLocaleString()} تومان است`,
                },
                max: {
                  value: RECHARGE_INPUT_MAX_VALUE,
                  message: `حداکثر مبلغ شارژ کیف پول ${RECHARGE_INPUT_MAX_VALUE.toLocaleString()} تومان است`,
                },
              })}
              error={errors.rechargeAmount?.message}
            />
          </div>
          <div>
            <Button type="submit">پرداخت</Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default WalletTopUpModal;
