import { ReactNode } from "react";

export interface TabProps {
  id: string;
  children: ReactNode;
  ariaControls: string;
  path: string;
  tabIndex?: number;
}
