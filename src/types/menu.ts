import { IconName } from "lucide-react/dynamic";

export interface MenuItem {
  id: string;
  href: string;
  icon: IconName;
  label: string;
  isVisible: boolean;
}
