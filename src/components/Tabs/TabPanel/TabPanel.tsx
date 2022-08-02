import React, { FC, useContext } from "react";
import { TabsContext } from "../Tabs";
import { isSelected } from "../../../utils";
import { TabPanelProps } from ".";
import "./TabPanel.css";

export const TabPanel: FC<TabPanelProps> = ({
  children,
  id,
  ariaLabelLedby,
}) => {
  const { selectedTab } = useContext(TabsContext);
  if (isSelected(selectedTab, ariaLabelLedby))
    return (
      <div
        id={id}
        data-testid={id}
        role="tabpanel"
        tabIndex={0}
        aria-labelledby={ariaLabelLedby}
      >
        {children}
      </div>
    );

  return null;
};
