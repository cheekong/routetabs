import React, { FC, useCallback, useRef, KeyboardEvent } from "react";
import "./TabList.css";
import { TabListProps } from "./TabList.types";

export const TabList: FC<TabListProps> = ({
  children,
  ariaLabel,
  ariaLabelLedby,
}) => {
  const tabsRefList = useRef<HTMLDivElement>(null);

  const onKeyDown = useCallback((event: KeyboardEvent) => {
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
        tabs[previous]?.click();
        break;
      }
      case "ArrowRight": {
        const next = (idx + 1 + tabs.length) % tabs.length;
        tabs[next]?.focus();
        tabs[next]?.click();
        break;
      }
      case "Home": {
        tabs[0].focus();
        tabs[0].click();
        break;
      }
      case "End": {
        tabs[tabs.length - 1].focus();
        tabs[tabs.length - 1].click();
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
