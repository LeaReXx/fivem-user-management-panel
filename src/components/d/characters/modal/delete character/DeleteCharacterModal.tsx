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
const userInitialData = {
  firstName: "Louis",
  lastName: "Hudson",
  gender: "male",
  nationality: "american",
  birthDate: new Date("1937-10-06T20:30:00.000Z"),
  backstory:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum inventore repellat dolorem eos hic dolorum, ea voluptates est amet cupiditate quis voluptate corporis sunt sed! Architecto quod vitae mollitia dolores?",
};
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
