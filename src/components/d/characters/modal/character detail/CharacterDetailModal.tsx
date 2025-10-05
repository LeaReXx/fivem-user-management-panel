"use client";
import React, { useEffect, useState } from "react";
import Modal from "@/components/ui/modal";
import { useQueryState } from "nuqs";
import CharacterForm from "../CharacterForm";
import { cn } from "@/lib/utils";
import { DynamicIcon, IconName } from "lucide-react/dynamic";

const userInitialData = {
  firstName: "Louis",
  lastName: "Hudson",
  gender: "male",
  status: 1,
  nationality: "american",
  birthDate: new Date("1937-10-06T20:30:00.000Z"),
  backstory:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum inventore repellat dolorem eos hic dolorum, ea voluptates est amet cupiditate quis voluptate corporis sunt sed! Architecto quod vitae mollitia dolores?",
};
const CharacterDetailModal: React.FC = () => {
  const [view, setView] = useQueryState("view");
  const [isOpenModal, setIsOpenModal] = useState(false);
  useEffect(() => {
    console.log(view);
    if (view) {
      setIsOpenModal(true);
    } else {
      setIsOpenModal(false);
    }
  }, [view]);

  const handleClose = () => setView(null);

  return (
    <Modal
      isOpen={isOpenModal}
      onClose={handleClose}
      title="مشاهده کاراکتر"
      size="xl"
    >
      <StatusMessage status={userInitialData.status} />
      <CharacterForm disabled initialData={userInitialData} />
    </Modal>
  );
};

export default CharacterDetailModal;

const StatusMessage = ({ status }: { status: number }) => {
  const statusConfig = {
    1: {
      message: "کاراکتر در انتظار تایید است",
      className: "bg-yellow-600/60 text-yellow-100 border-yellow-500/50",
      icon: "triangle-alert",
    },
    2: {
      message: "کاراکتر تایید شده است",
      className: "bg-green-600/60 text-green-100 border-green-500/50",
      icon: "circle-check-big",
    },
    3: {
      message: "کاراکتر رد شده است",
      className: "bg-red-600/60 text-red-100 border-red-300/50",
      icon: "x-circle",
    },
  };

  const config = statusConfig[status as keyof typeof statusConfig];

  return (
    <div
      className={cn(
        "p-4 rounded-md border flex flex-col gap-2 mb-4",
        config.className
      )}
    >
      <div className="flex items-center gap-2">
        <DynamicIcon name={config.icon as IconName} size={20} />
        <p className="font-medium">{config.message}</p>
      </div>
      {status === 3 && (
        <p className="text-sm">
          کاراکتر مورد تایید نیست, اسامی No Pixel باید تغییر کند
        </p>
      )}
      {status === 1 && (
        <p className="text-sm">تایید کاراکتر ممکن است تا 24 ساعت زمانبر باشد</p>
      )}
    </div>
  );
};
