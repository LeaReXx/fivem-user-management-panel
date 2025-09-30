import React from "react";
import CharacterItem from "./CharacterItem";
import { Plus, UserPlus } from "lucide-react";
export interface CharacterFace {
  id: number;
  firstName: string;
  lastName: string;
  status: 1 | 2 | 3;
  createdAt: Date;
}

const CharacterList: React.FC = () => {
  const userCharacters: CharacterFace[] = [
    {
      id: 1,
      firstName: "Michael",
      lastName: "DeSanta",
      status: 1,
      createdAt: new Date("2023-01-10"),
    },
    {
      id: 2,
      firstName: "Franklin",
      lastName: "Clinton",
      status: 3,
      createdAt: new Date("2023-02-15"),
    },
  ];

  return (
    <div className="grid grid-cols-12 gap-4 mt-8">
      {userCharacters.map((character) => (
        <CharacterItem key={character.id} {...character} />
      ))}
      <div className="flex items-center hover:bg-main-box-background/30 gap-2 justify-center flex-col border-2 border-gray-400 opacity-70 duration-200 hover:opacity-100 cursor-pointer hover:border-gray-500 border-dashed rounded-lg overflow-hidden col-span-12 sm:col-span-6 xl:col-span-4 p-4">
        <div className="bg-gray-500/50 rounded-full w-15 h-15 flex items-center justify-center">
          <Plus size={40} />
        </div>
        <div className="text-xl font-medium">
          <p>افزودن کاراکتر جدید</p>
        </div>
      </div>
    </div>
  );
};

export default CharacterList;
