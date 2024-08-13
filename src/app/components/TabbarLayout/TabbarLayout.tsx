import { Box } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import TabContext from '@/app/contexts/TabContext';
import { AccountIcon, CloseIcon, TsIcon } from '../GlobalComponents';
import { CustomTab, CustomTabs } from './TabbarComponents';
import { useRouter } from 'next/navigation';

const TabbarLayout = () => {
  
  const router = useRouter();

  const { tabs, setTabs, selectedTab, setSelectedTab } = useContext(TabContext);

  const onClickTab = (event: any, index: number, fileName: string) => {
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

    if (fileName === 'SangheonLee.ts') {
      router.push('/#about-me');
    }

    setSelectedTab(index);
  };

  const getIcon = (fileName: string) => {
    if (fileName === 'SangheonLee.ts') {
      return <TsIcon style={{ marginRight: 6, transform: 'translateY(-2px)' }} />;
    } else if (fileName === 'Pixie.ts') {
      return null;
    }
  }

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
            {getIcon(tab)}
            {tab}
            <CloseIcon style={{ marginLeft: 4 }} />
          </Box>
         }
         sx={{ textTransform: 'none' }}
         disableRipple={true}
         isSelected={selectedTab === index}
         onClick={(event) => onClickTab(event, index ,tab)}
         />
      ))}
    </CustomTabs>
  );
};

export default TabbarLayout;