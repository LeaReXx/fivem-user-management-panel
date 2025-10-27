"use client";
import { CharacterFace } from "./CharacterList";
import CharacterStatusHandler from "@/components/shared/CharacterStatusHandler";
import { formatRelativeTime } from "@/lib/utils";
import { Clock } from "lucide-react";
import EditCharacterBtn from "./EditCharacterBtn";
import DeleteCharacterBtn from "./DeleteCharacterBtn";
import { useQueryState } from "nuqs";

interface CharacterFaceProps extends CharacterFace {}

const CharacterItem: React.FC<CharacterFaceProps> = ({
  id,
  firstName,
  lastName,
  status,
  createdAt,
}) => {
  const [, setView] = useQueryState("view");

  const setViewQueryOnClick = (characterId: number) => {
    setView(String(characterId));
  };

  return (
    <div className="bg-inside-box-bg-color shadow-lg rounded-lg overflow-hidden col-span-12 sm:col-span-6 xl:col-span-4 border border-main-text-color/10 transition-transform hover:shadow-xl hover:scale-101 duration-300">
      <div className="cursor-pointer" onClick={() => setViewQueryOnClick(id)}>
        <div className="flex justify-between items-center p-3">
          <CharacterStatusHandler status={status} />
          <h3 className="text-lg font-semibold tracking-wide">
            {firstName} {lastName}
          </h3>
        </div>

        <div className="my-2 px-3 text-main-text-color">
          <span
            className="flex items-center gap-2 text-sm"
            title={String(createdAt)}
          >
            <Clock size={20} strokeWidth={1.5} className="text-sky-500" />
            ارسال شده در {formatRelativeTime(createdAt)}
          </span>
        </div>
      </div>

      <div className="flex divide-x divide-main-text-color/10 border-t border-main-text-color/10">
        <EditCharacterBtn disabled={status === 3} />
        <DeleteCharacterBtn disabled={status === 3} />
      </div>
    </div>
  );
};

export default CharacterItem;
