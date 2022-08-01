import React, { FC, ReactNode, useEffect, useState } from "react";
import "./Tabs.css";

export interface TabsProps {
  id: string;
  defaultTab: string;
  children: ReactNode;
}

export const TabsContext = React.createContext<{
  selectedTab: string | null;
  setSelectedTab: (tab: string) => void;
}>({
  selectedTab: null,
  setSelectedTab: (tab: string) => {
    throw new Error("should not be used without TabsContext.Provider");
  },
});

export const Tabs: FC<TabsProps> = ({ id, children, defaultTab }) => {
  const [selectedTab, setSelectedTab] = useState(defaultTab);

  useEffect(() => {
    setSelectedTab(defaultTab);
  }, [defaultTab]);
  console.log("selectedTab", selectedTab);
  // if (id === "carbTabs") {
  //   console.log(id + " " + selectedTab);
  //   console.log("splitTrueValue", splitTrueValue);
  // }

  // const contextValue = useMemo((){
  //   setSelectedTab,
  //   selectedTab,
  // };

  const contextValue = React.useMemo(
    () => ({
      setSelectedTab,
      selectedTab,
    }),
    [setSelectedTab, selectedTab]
  );

  return (
    <TabsContext.Provider value={contextValue}>
      <div id="carbTab" className="tab-group">
        {children}
      </div>
    </TabsContext.Provider>
  );
};
