"use client";
import { Plus, SquarePen } from "lucide-react";
import React, { useState } from "react";
import EditCharacterModal from "./modal/edit charachter/EditCharacterModal";
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
        className="w-1/2 cursor-pointer flex items-center justify-center gap-2 py-3 text-sm font-medium text-sky-500 hover:bg-sky-500/10 transition-colors duration-200 disabled:bg-gray-600 disabled:text-white/50 disabled:cursor-not-allowed"
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
