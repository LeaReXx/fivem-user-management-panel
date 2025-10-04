import CharacterList from "@/components/d/characters/CharacterList";
import BoxHeader from "@/components/d/shared/box header/BoxHeader";
import React from "react";

const CharactersPage: React.FC = () => {
  return (
    <div className="order-2 md:order-1 col-span-12 md:col-span-6 md:col-start-1 md:col-end-7 lg:col-start-1 lg:col-end-7 bg-gradient-to-t from-secondary-box-background/90 to-main-box-background/90 backdrop-blur-[2px] rounded-lg p-4 min-h-[500px]">
      <BoxHeader title="کاراکتر ها" iconName="users" />
      <CharacterList />
    </div>
  );
};

export default CharactersPage;
