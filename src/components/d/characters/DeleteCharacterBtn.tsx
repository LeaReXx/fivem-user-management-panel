"use client";
import React, { useState } from "react";
import { Trash2 } from "lucide-react";
import DeleteCharacterModal from "./modal/delete character/DeleteCharacterModal";

type DeleteCharacterBtnProps = {
  disabled: boolean;
};

const DeleteCharacterBtn: React.FC<DeleteCharacterBtnProps> = ({
  disabled,
}) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <DeleteCharacterModal
        isOpenModal={isOpenModal}
        onClose={() => setIsOpenModal(false)}
      />
      <button
        className="w-1/2 cursor-pointer flex items-center justify-center gap-2 py-3 text-sm font-medium text-red-500 hover:bg-red-500/10 transition-colors duration-200 disabled:bg-gray-600 disabled:text-white/50 disabled:cursor-not-allowed"
        disabled={disabled}
        onClick={() => setIsOpenModal(true)}
      >
        <Trash2 size={20} />
        <span>حذف</span>
      </button>
    </>
  );
};

export default DeleteCharacterBtn;
