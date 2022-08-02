import React, { FC, useEffect, useState } from "react";
import { TabsContextArgs, TabsProps } from ".";
import "./Tabs.css";

export const TabsContext = React.createContext<TabsContextArgs>({
  selectedTab: "/",
  setSelectedTab: (tab: string) => {},
});

export const Tabs: FC<TabsProps> = ({ id, children, defaultTab }) => {
  const [selectedTab, setSelectedTab] = useState(defaultTab);

  useEffect(() => {
    setSelectedTab(defaultTab);
  }, [defaultTab]);

  const contextValue = React.useMemo(
    () => ({
      setSelectedTab,
      selectedTab,
    }),
    [setSelectedTab, selectedTab]
  );

  return (
    <TabsContext.Provider value={contextValue}>
      <div id="carbTab" className="tabs">
        {children}
      </div>
    </TabsContext.Provider>
  );
};
