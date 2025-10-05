import React from "react";
import { CharacterFace } from "./CharacterList";
import CharacterStatusHandler from "@/components/shared/CharacterStatusHandler";
import { formatRelativeTime } from "@/lib/utils";
import { Clock, SquarePen, Trash2 } from "lucide-react";
import EditCharacterBtn from "./EditCharacterBtn";

interface CharacterFaceProps extends CharacterFace {}

const CharacterItem: React.FC<CharacterFaceProps> = ({
  id,
  firstName,
  lastName,
  status,
  createdAt,
}) => {
  return (
    <div className="bg-main-box-background/80 shadow-lg rounded-lg overflow-hidden col-span-12 sm:col-span-6 xl:col-span-4 border border-white/10 transition hover:shadow-xl hover:scale-102 duration-300">
      <div className="flex justify-between items-center p-3">
        <CharacterStatusHandler status={status} />
        <h3 className="text-lg font-semibold tracking-wide">
          {firstName} {lastName}
        </h3>
      </div>

      <div className="my-2 px-3 text-gray-300">
        <span className="flex items-center gap-2 text-sm">
          <Clock size={20} strokeWidth={1.5} className="text-sky-400" />
          {formatRelativeTime(createdAt)}
        </span>
      </div>

      <div className="flex divide-x divide-white/10 border-t border-white/10">
        <EditCharacterBtn disabled={status === 3} />
        <button
          className="w-1/2 cursor-pointer flex items-center justify-center gap-2 py-3 text-sm font-medium text-red-500 hover:bg-red-500/10 transition-colors duration-200 disabled:bg-gray-600 disabled:text-white/50 disabled:cursor-not-allowed"
          disabled={status === 3}
        >
          <Trash2 size={20} />
          <span>حذف</span>
        </button>
      </div>
    </div>
  );
};

export default CharacterItem;
