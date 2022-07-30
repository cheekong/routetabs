import React, { FC, ReactNode } from "react";

export interface TabContentProps {
  children: ReactNode;
}

export const TabContent: FC<TabContentProps> = ({ children }) => {
  return <div style={{ backgroundColor: "orange" }}>{children}</div>;
};
