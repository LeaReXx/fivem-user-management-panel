// NewCharacterBtn.tsx
"use client";
import { Plus } from "lucide-react";
import type React from "react";
import { useState } from "react";
import NewCharacterModal from "./modal/create character/NewCharacterModal";

const NewCharacterBtn: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <NewCharacterModal
        isOpenModal={isOpenModal}
        onClose={() => setIsOpenModal(false)}
      />
      <button
        type="button"
        className="flex items-center hover:bg-content-box-bg-color-1/30 transition-[background-color] gap-2 justify-center flex-col border-2 border-gray-400 opacity-70 duration-200 hover:opacity-100 cursor-pointer hover:border-gray-500 border-dashed rounded-lg overflow-hidden col-span-12 sm:col-span-6 xl:col-span-4 p-4"
        onClick={() => setIsOpenModal(true)}
      >
        <div className="bg-gray-500/50 rounded-full w-15 h-15 flex items-center justify-center">
          <Plus size={40} />
        </div>
        <div className="text-lg font-medium">
          <p>افزودن کاراکتر جدید</p>
        </div>
      </button>
    </>
  );
};

export default NewCharacterBtn;
