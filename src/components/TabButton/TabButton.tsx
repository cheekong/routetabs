import React, { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

import "./TabButton.css";

export interface TabButtonProps {
  children: ReactNode;
  isSelected?: boolean;
  onClick?: () => void;
  navigationPath: string;
}

export const TabButton: FC<TabButtonProps> = ({
  children,
  isSelected,
  onClick,
  navigationPath,
}) => {
  return (
    <Link
      to={navigationPath}
      id="tab-1"
      type="button"
      role="tab"
      aria-selected={isSelected ? "true" : "false"}
      aria-controls="tabpanel-1"
      onClick={onClick}
    >
      {children}
    </Link>
  );
};
