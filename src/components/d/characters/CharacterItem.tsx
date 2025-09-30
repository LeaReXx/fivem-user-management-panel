import React from "react";
import { CharacterFace } from "./CharacterList";
import CharacterStatusHandler from "@/components/shared/CharacterStatusHandler";
import { formatRelativeTime } from "@/lib/utils";
import { Clock, SquarePen, Trash2 } from "lucide-react";
interface CharacterFaceProps extends CharacterFace {}
const CharacterItem: React.FC<CharacterFaceProps> = ({
  id,
  firstName,
  lastName,
  status,
  createdAt,
}) => {
  return (
    <div className="bg-main-box-background/70 shadow-md rounded-lg overflow-hidden col-span-12 sm:col-span-6 xl:col-span-4">
      <div className="flex justify-between items-center p-2">
        <div>
          <CharacterStatusHandler status={status} />
        </div>
        <div>
          <h3 className="text-lg font-medium">
            {firstName} {lastName}
          </h3>
        </div>
      </div>
      <div className="my-1 p-2">
        <span className="flex gap-1">
          <Clock size={22} strokeWidth={1.5} />
          {formatRelativeTime(createdAt)}
        </span>
      </div>
      <div className="flex">
        <button
          className="w-1/2 disabled:cursor-default disabled:bg-gray-500 disabled:border-l-2 disabled:border-gray-400/40 bg-sky-800 duration-200 hover:bg-sky-700 cursor-pointer p-2 text-center flex gap-1 justify-center"
          disabled={status === 3}
        >
          <SquarePen size={22} />
          <span>ویرایش</span>
        </button>
        <button
          className="w-1/2 disabled:cursor-default disabled:bg-gray-500 bg-red-800 duration-200 hover:bg-red-700 cursor-pointer p-2 text-center flex gap-1 justify-center"
          disabled={status === 3}
        >
          <Trash2 size={22} />
          <span>حذف</span>
        </button>
      </div>
    </div>
  );
};

export default CharacterItem;
