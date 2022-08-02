import React, { FC, useCallback, useRef } from "react";
import "./TabList.css";

export interface TabListProps {
  children: React.ReactNode;
  ariaLabel: string;
  ariaLabelLedby?: string;
}

export const TabList: FC<TabListProps> = ({
  children,
  ariaLabel,
  ariaLabelLedby,
}) => {
  const tabsRefList = useRef<HTMLDivElement>(null);

  const onKeyDown = useCallback((event: React.KeyboardEvent) => {
    const tabsList = tabsRefList.current;
    if (!tabsList) return;
    const tabs = Array.from<HTMLElement>(
      tabsList.querySelectorAll('[role="tab"]:not([diabled])')
    );
    const idx = tabs.indexOf(document.activeElement as HTMLElement);
    if (idx < 0) return;
    switch (event.key) {
      case "ArrowLeft": {
        const previous = (idx - 1 + tabs.length) % tabs.length;
        tabs[previous]?.focus();
        break;
      }
      case "ArrowRight": {
        const next = (idx + 1 + tabs.length) % tabs.length;
        tabs[next]?.focus();
        break;
      }
      case "Home": {
        tabs[0].focus();
        break;
      }
      case "End": {
        console.log("tabs.length", tabs.length);
        tabs[tabs.length - 1].focus();
        break;
      }
    }
  }, []);

  return (
    <div
      data-testid={ariaLabel}
      ref={tabsRefList}
      role="tablist"
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelLedby}
      onKeyDown={onKeyDown}
    >
      {children}
    </div>
  );
};
