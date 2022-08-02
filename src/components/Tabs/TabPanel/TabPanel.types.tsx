import { ReactNode } from "react";

export interface TabPanelProps {
  id: string;
  children: ReactNode;
  ariaLabelLedby: string;
}
