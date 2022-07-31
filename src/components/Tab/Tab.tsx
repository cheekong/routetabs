import React, { FC, ReactNode } from "react";
import { TabsContext } from "../Tabs";

import "./Tab.css";

export interface TabProps {
  id: string;
  children: ReactNode;
  onClick: () => void;
  ariaControls: string;
}

export const Tab: FC<TabProps> = ({ id, children, onClick, ariaControls }) => {
  const { selectedTab, setSelectedTab } = React.useContext(TabsContext);
  console.log("selectedTab", selectedTab);
  const isSelected = selectedTab
    ?.split("/")
    .filter((e) => e)
    .find((e) => e === id);
  // console.log("selectedTab ", selectedTab);
  if (id === "potato") {
    console.log("test");
    console.log("selectedTab isselected", selectedTab === id ? 0 : -1);
  }
  return (
    <button
      id={id}
      type="button"
      role="tab"
      tabIndex={isSelected ? 0 : -1}
      aria-selected={isSelected ? "true" : "false"}
      aria-controls={ariaControls}
      onClick={() => {
        setSelectedTab(id);
        onClick();
      }}
    >
      {children}
    </button>
  );
};
