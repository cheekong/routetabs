import React, { FC, useContext } from "react";
import { isSelected } from "../../../utils";

import { TabsContext } from "..";
import "./Tab.css";
import { TabProps } from "./Tab.types";

export const Tab: FC<TabProps> = ({
  id,
  children,
  onClick,
  ariaControls,
  tabIndex,
}) => {
  const { selectedTab, setSelectedTab } = useContext(TabsContext);
  const isTabSelected = isSelected(selectedTab, id);

  return (
    <button
      id={id}
      data-testid={id}
      type="button"
      role="tab"
      tabIndex={
        typeof tabIndex !== "undefined" ? tabIndex : isTabSelected ? 0 : -1
      }
      aria-selected={isTabSelected ? "true" : "false"}
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
