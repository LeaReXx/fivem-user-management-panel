import { useState } from "react";
import { MenuItem } from "@/types/menu";
import menuItemsData from "@/data/menuItems.json";

export const useMenuItems = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(
    menuItemsData as MenuItem[]
  );

  const toggleMenuVisibility = (id: string) => {
    setMenuItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, isVisible: !item.isVisible } : item
      )
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
