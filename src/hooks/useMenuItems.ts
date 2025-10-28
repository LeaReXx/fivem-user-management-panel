import { useState } from "react";
import menuItemsData from "@/data/menuItems.json";
import type { MenuItem } from "@/types/menu";

export const useMenuItems = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(
    menuItemsData as MenuItem[],
  );

  const toggleMenuVisibility = (id: string) => {
    setMenuItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, isVisible: !item.isVisible } : item,
      ),
    );
  };

  const getVisibleMenuItems = () => {
    return menuItems.filter((item) => item.isVisible);
  };

  return {
    menuItems,
    visibleMenuItems: getVisibleMenuItems(),
    toggleMenuVisibility,
  };
};
