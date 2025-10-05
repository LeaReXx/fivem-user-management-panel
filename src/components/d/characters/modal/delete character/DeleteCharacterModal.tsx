// DeleteCharacterModal.tsx
"use client";
import Modal from "@/components/ui/modal";
import React from "react";
import CharacterForm from "../CharacterForm";
import { CharacterFormData } from "@/types/character";
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
