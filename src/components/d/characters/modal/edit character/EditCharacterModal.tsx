// EditCharacterModal.tsx
"use client";
import type React from "react";
import Modal from "@/components/ui/modal";
import type { CharacterFormData } from "@/types/character";
import CharacterForm from "../CharacterForm";

interface EditCharacterModalProps {
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
const EditCharacterModal: React.FC<EditCharacterModalProps> = ({
  isOpenModal,
  onClose,
}) => {
  const handleSubmit = (data: CharacterFormData) => {
    console.log(data);
  };

  return (
    <Modal
      isOpen={isOpenModal}
      onClose={onClose}
      size="xl"
      title="ویرایش کاراکتر"
    >
      <CharacterForm onSubmit={handleSubmit} initialData={userInitialData} />
    </Modal>
  );
};

export default EditCharacterModal;
