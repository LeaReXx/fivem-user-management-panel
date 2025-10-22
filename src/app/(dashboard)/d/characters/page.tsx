import CharacterList from "@/components/d/characters/CharacterList";
import PageHeader from "@/components/d/shared/page header/PageHeader";
import React, { Suspense } from "react";

const CharactersPage: React.FC = () => {
  return (
    <div className="order-2 md:order-1 col-span-12 md:col-span-6 md:col-start-1 md:col-end-7 lg:col-start-1 lg:col-end-7 bg-gradient-to-t from-content-box-bg-color-1 to-content-box-bg-color-2 backdrop-blur-[2px] rounded-lg p-4 min-h-[500px]">
      <PageHeader title="کاراکتر ها" iconName="users" />
      <Suspense fallback={<div className="mt-4">در حال بارگذاری...</div>}>
        <CharacterList />
      </Suspense>
    </div>
  );
};

export default CharactersPage;
