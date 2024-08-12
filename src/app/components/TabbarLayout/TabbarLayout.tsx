import { Box } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import TabContext from '@/app/contexts/TabContext';
import { CloseIcon } from '../GlobalComponents';
import { CustomTab, CustomTabs } from './TabbarComponents';

const TabbarLayout = () => {
  
  const { tabs, setTabs, selectedTab, setSelectedTab } = useContext(TabContext);

  const onClickTab = (event: any, index: number) => {
    if (event.target.tagName === 'I') {
      if (tabs.length === 1) {
        return;
      }
      setTabs((prevTabs: string[]) => {
        return prevTabs.filter((_, i) => i !== index);
      });
      if (selectedTab === 0) {
        setSelectedTab(0);
      } else if (selectedTab === index) {
        setSelectedTab(index-1);
      } else if (selectedTab > index) {
        setSelectedTab(selectedTab-1);
      }
      return;
    }

    setSelectedTab(index);
  };

  return (
    <CustomTabs
      value={selectedTab}
      TabIndicatorProps={{ style: { top: 0, bottom: 'auto' } }}
      indicatorColor="primary"
      textColor="inherit"
    >
      {tabs.map((tab, index) => (
        <CustomTab
         key={index}
         label={
          <Box style={{ display: 'flex', alignItems: 'center' }}>
            {tab}
            <CloseIcon style={{ marginLeft: 4 }} />
          </Box>
         }
         sx={{ textTransform: 'none' }}
         disableRipple={true}
         isSelected={selectedTab === index}
         onClick={(event) => onClickTab(event, index)}
         />
      ))}
    </CustomTabs>
  );
};

export default TabbarLayout;