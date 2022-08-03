import { ReactNode } from "react";

export interface TabsProps {
  id: string;
  defaultTab: string;
  children: ReactNode;
}

export interface TabsContextArgs {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
}
