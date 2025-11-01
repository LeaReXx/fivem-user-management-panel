import { Monitor } from "lucide-react";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import ActiveSessionItem from "./active session item/ActiveSessionItem";

const ActiveSessions = async () => {
  const activeSessionsList = await auth.api.listSessions({
    headers: await headers(),
  });
  return (
    <div className="bg-inside-box-bg-color col-span-12 md:col-span-6 rounded-lg p-4">
      <div className="pb-4 flex justify-between items-center">
        <p className="flex gap-2 font-medium">
          <Monitor size={22} strokeWidth={1.5} /> نشست های فعال
        </p>
      </div>
      <div className="space-y-2">
        {activeSessionsList.map((session) => (
          <ActiveSessionItem key={session.id} session={session} />
        ))}
      </div>
    </div>
  );
};

export default ActiveSessions;
