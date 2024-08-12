"use client"

import React, { createContext, Dispatch, SetStateAction, useState } from 'react';

interface TabContextType {
  tabs: string[];
  setTabs: Dispatch<SetStateAction<string[]>>;
  selectedTab: number;
  setSelectedTab: Dispatch<SetStateAction<number>>;
}

const TabContext = createContext<TabContextType>({
   tabs: [],
   setTabs: () => {},
   selectedTab: 0,
   setSelectedTab: () => {},
});

export const TabProvider = ({ children }: { children: React.ReactNode }) => {
  const [tabs, setTabs] = useState<string[]>(['SangheonLee.ts']);
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <TabContext.Provider value={{ tabs, setTabs, selectedTab, setSelectedTab }}>
      {children}
    </TabContext.Provider>
  );
};

export default TabContext;
