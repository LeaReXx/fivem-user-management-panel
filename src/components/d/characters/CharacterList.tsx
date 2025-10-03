import React from "react";
import CharacterItem from "./CharacterItem";
import { Plus, UserPlus } from "lucide-react";
import NewCharacterBtn from "./NewCharacterBtn";
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
      <NewCharacterBtn />
    </div>
  );
};

export default CharacterList;
