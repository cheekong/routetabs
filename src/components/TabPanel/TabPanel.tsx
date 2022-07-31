import React, { FC, ReactNode } from "react";
import { TabsContext } from "../Tabs";

export interface TabPanelProps {
  id: string;
  children: ReactNode;
  ariaLabelLedby: string;
}

export const TabPanel: FC<TabPanelProps> = ({
  children,
  id,
  ariaLabelLedby,
}) => {
  const { selectedTab } = React.useContext(TabsContext);
  const isSelected = selectedTab
    ?.split("/")
    .filter((e) => e)
    .find((e) => e === ariaLabelLedby);

  if (isSelected)
    return (
      <div
        role="tabpanel"
        tabIndex={0}
        id={id}
        aria-labelledby={ariaLabelLedby}
      >
        {children}
      </div>
    );

  return null;
};
