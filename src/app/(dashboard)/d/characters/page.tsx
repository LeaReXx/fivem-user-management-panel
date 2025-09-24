import { Users } from "lucide-react";
import React from "react";

const CharactersPage: React.FC = () => {
  return (
    <div className="p-6 flex gap-2">
      <Users />
      <p className="text-xl font-medium">کاراکتر ها</p>
    </div>
  );
};

export default CharactersPage;
