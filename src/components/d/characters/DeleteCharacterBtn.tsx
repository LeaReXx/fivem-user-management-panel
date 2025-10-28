"use client";
import { Trash2 } from "lucide-react";
import type React from "react";
import { useState } from "react";
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
        className="w-1/2 cursor-pointer flex items-center justify-center gap-2 py-3 text-sm font-medium hover:bg-red-500/80 hover:text-white transition-[background-color] duration-200 disabled:hover:bg-transparent disabled:opacity-50 disabled:hover:text-inherit disabled:cursor-not-allowed"
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
