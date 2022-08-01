import React, { FC, useCallback } from "react";
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
  const refList = React.useRef<HTMLDivElement>(null);

  const onKeyDown = useCallback((e: React.KeyboardEvent) => {
    const list = refList.current;
    if (!list) return;
    const tabs = Array.from<HTMLElement>(
      list.querySelectorAll('[role="tab"]:not([diabled])')
    );
    const index = tabs.indexOf(document.activeElement as HTMLElement);
    if (index < 0) return;

    switch (e.key) {
      case "ArrowUp":
      case "ArrowLeft": {
        const next = (index - 1 + tabs.length) % tabs.length;
        tabs[next]?.focus();
        break;
      }
      case "ArrowDown":
      case "ArrowRight": {
        const next = (index + 1 + tabs.length) % tabs.length;
        tabs[next]?.focus();
        break;
      }
    }
  }, []);
  return (
    <div
      ref={refList}
      role="tablist"
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelLedby}
      onKeyDown={onKeyDown}
    >
      {children}
    </div>
  );
};
