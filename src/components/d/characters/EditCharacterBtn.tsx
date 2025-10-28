"use client";
import { Plus, SquarePen } from "lucide-react";
import type React from "react";
import { useState } from "react";
import EditCharacterModal from "./modal/edit character/EditCharacterModal";

interface EditCharacterBtnProps {
  disabled?: boolean;
}
const EditCharacterBtn: React.FC<EditCharacterBtnProps> = ({ disabled }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <EditCharacterModal
        isOpenModal={isOpenModal}
        onClose={() => setIsOpenModal(false)}
      />
      <button
        className="w-1/2 cursor-pointer flex items-center justify-center transition-[background-color] gap-2 py-3 text-sm font-medium  hover:bg-sky-500/80 hover:text-white duration-200 disabled:bg-transparent disabled:opacity-50 disabled:hover:text-inherit disabled:cursor-not-allowed"
        onClick={() => setIsOpenModal(true)}
        disabled={disabled}
      >
        <SquarePen size={20} />
        <span>ویرایش</span>
      </button>
    </>
  );
};

export default EditCharacterBtn;
