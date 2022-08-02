import { ReactNode } from "react";

export interface TabProps {
  id: string;
  children: ReactNode;
  onClick: () => void;
  ariaControls: string;
  tabIndex?: number;
}
