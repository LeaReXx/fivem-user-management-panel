import React from "react";
import { Badge } from "../ui/badge";
interface CharacterStatusProps {
  status: 1 | 2 | 3;
}
const CharacterStatusHandler: React.FC<CharacterStatusProps> = ({ status }) => {
  return (
    <>
      {status === 1 && (
        <Badge className="bg-yellow-700 text-sm">در انتظار تایید</Badge>
      )}
      {status === 2 && <Badge className="bg-red-700 text-sm">رد شده</Badge>}
      {status === 3 && (
        <Badge className="bg-green-700 text-sm">تایید شده</Badge>
      )}
    </>
  );
};
export default CharacterStatusHandler;
