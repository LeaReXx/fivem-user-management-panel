import { useQueryState } from "nuqs";
import { Alert } from "@/components/ui/alert";
import Modal from "@/components/ui/modal";
import TopUpForm from "./top up form/TopUpForm";

const WalletTopUpModal = () => {
  const [isOpen, setIsOpen] = useQueryState("topup", {
    defaultValue: false,
    parse: (value) => value === "open",
    serialize: (value) => (value ? "open" : ""),
  });

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Modal
      title="شارژ کیف پول"
      isOpen={isOpen}
      onClose={handleClose}
      titleIconName="zap"
      size="sm"
      footer={
        <div>
          <Alert variant="info" className="p-2 text-sm" icon="info">
            پس از پرداخت کیف پول شما به صورت خودکار شارژ خواهد شد
          </Alert>
        </div>
      }
    >
      <TopUpForm />
    </Modal>
  );
};

export default WalletTopUpModal;
