// NewCharacterModal.tsx
"use client";
import Modal from "@/components/ui/modal";
import React, { useState } from "react";
import NewCharacterRules from "./NewCharacterRules";
import NewCharacterForm from "../CharacterForm";
import { CharacterFormData } from "@/types/character";


interface NewCharacterModalProps {
  isOpenModal: boolean;
  onClose: () => void;
}

const NewCharacterModal: React.FC<NewCharacterModalProps> = ({
  isOpenModal,
  onClose,
}) => {
  const [isAcceptedRules, setIsAcceptedRules] = useState(false);


  const handleSubmit = (data: CharacterFormData) => {
    console.log(data);
  };

  const acceptRulesBtnHandler = () => {
    setIsAcceptedRules(true);
  };

  const characterModalOnClose = () => {
    onClose();
    setIsAcceptedRules(false);
  };

  return (
    <Modal
      isOpen={isOpenModal}
      onClose={characterModalOnClose}
      size="xl"
      title="افزودن کاراکتر جدید"
    >
      {isAcceptedRules ? (
        <NewCharacterForm onSubmit={handleSubmit} />
      ) : (
        <NewCharacterRules acceptRulesBtnHandler={acceptRulesBtnHandler} />
      )}
    </Modal>
  );
};

export default NewCharacterModal;
