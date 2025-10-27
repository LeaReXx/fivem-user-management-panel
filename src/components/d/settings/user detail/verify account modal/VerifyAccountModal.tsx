import { useQueryState } from "nuqs";
import Modal from "@/components/ui/modal";
import VerifyAccountForm from "./verify account form/VerifyAccountForm";
import { Alert } from "@/components/ui/alert";

const VerifyAccountModal = () => {
  const [isOpen, setIsOpen] = useQueryState("verify", {
    defaultValue: false,
    parse: (value) => value === "open",
    serialize: (value) => (value ? "open" : ""),
  });

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Modal
      title="تایید حساب کاربری"
      isOpen={isOpen}
      onClose={handleClose}
      closeOnOverlayClick={false}
      titleIconName="user-check"
      size="md"
    >
      <>
        <VerifyAccountForm />
      </>
    </Modal>
  );
};

export default VerifyAccountModal;
