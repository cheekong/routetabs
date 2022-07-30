import React, { FC, ReactNode } from "react";
import { TabButton } from "../TabButton";
import "./Tabs.css";

export interface TabsProps {
  children: ReactNode;
}

export const Tabs: FC<TabsProps> = ({ children }) => {
  return <div className="tab-group">{children}</div>;
};
