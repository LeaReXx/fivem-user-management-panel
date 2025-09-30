import CharacterList from "@/components/d/characters/CharacterList";
import BoxHeader from "@/components/d/shared/box header/BoxHeader";
import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";
import React from "react";

const CharactersPage: React.FC = () => {
  return (
    <div className="order-2 md:order-1 col-span-12 md:col-span-6 md:col-start-1 md:col-end-7 lg:col-start-1 lg:col-end-7 bg-gradient-to-t from-secondary-box-background/90 to-main-box-background/90 backdrop-blur-[2px] rounded-lg p-4">
      <BoxHeader title="کاراکتر ها" iconName="users">
        <Button className="[&_svg:not([class*='size-'])]:size-5.5">
          <UserPlus strokeWidth={1.5} />
          افزودن کاراکتر
        </Button>
      </BoxHeader>

      <CharacterList />
    </div>
  );
};

export default CharactersPage;
