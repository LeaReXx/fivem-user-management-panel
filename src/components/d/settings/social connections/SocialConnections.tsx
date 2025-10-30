import { Link } from "lucide-react";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import DiscordAccount from "./discord account/DiscordAccount";

const SocialConnections = async () => {
  const accounts = await auth.api.listUserAccounts({
    headers: await headers(),
  });

  const isConnectedDiscord = accounts.some(
    (account) => account.providerId === "discord",
  );
  return (
    <div className="bg-inside-box-bg-color col-span-12 md:col-span-6 rounded-lg p-4">
      <div className="pb-4 flex justify-between items-center">
        <p className="flex gap-2 font-medium">
          <Link size={22} strokeWidth={1.5} /> اتصالات
        </p>
      </div>
      <div>
        {isConnectedDiscord ? (
          <DiscordAccount />
        ) : (
          <div className="text-center py-6">
            <p className="text-main-text-color/60 text-sm">
              هیچ حساب اجتماعی متصل نشده است
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SocialConnections;
