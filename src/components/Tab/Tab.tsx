import React, { FC, ReactNode } from "react";
import { TabsContext } from "../Tabs";
import "./Tab.css";

export interface TabProps {
  id: string;
  children: ReactNode;
  onClick: () => void;
  ariaControls: string;
  tabIndex?: number;
}

export const Tab: FC<TabProps> = ({
  id,
  children,
  onClick,
  ariaControls,
  tabIndex,
}) => {
  const { selectedTab, setSelectedTab } = React.useContext(TabsContext);
  console.log("selectedTab", selectedTab);
  const isSelected = selectedTab
    ?.split("/")
    .filter((e) => e)
    .find((e) => e === id);
  // console.log("selectedTab ", selectedTab);

  return (
    <button
      id={id}
      type="button"
      role="tab"
      tabIndex={
        typeof tabIndex !== "undefined" ? tabIndex : isSelected ? 0 : -1
      }
      aria-selected={isSelected ? "true" : "false"}
      aria-controls={ariaControls}
      onClick={() => {
        setSelectedTab(selectedTab ?? ""); //todo: fix this null up
        onClick();
      }}
    >
      {children}
    </button>
  );
};
