// DeleteCharacterModal.tsx
"use client";
import type React from "react";
import ConfirmModal from "@/components/ui/confirmModal";

interface DeleteCharacterModalProps {
  isOpenModal: boolean;
  onClose: () => void;
}

const DeleteCharacterModal: React.FC<DeleteCharacterModalProps> = ({
  isOpenModal,
  onClose,
}) => {
  const handleSubmit = () => {
    console.log("Character deleted");
  };

  return (
    <ConfirmModal
      isOpen={isOpenModal}
      onClose={onClose}
      title="حذف کاراکتر"
      description="آیا از حذف این کاراکتر مطمئن هستید؟"
      onConfirm={handleSubmit}
      confirmType="delete"
    />
  );
};

export default DeleteCharacterModal;
