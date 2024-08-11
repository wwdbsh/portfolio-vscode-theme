'use client';

import React from 'react';
import styled from 'styled-components';
import styles from './layout.module.css';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ToolbarLayout from '@/app/components/ToolbarLayout/ToolbarLayout';
import SidebarLayout from '@/app/components/SidebarLayout/SidebarLayout';

const Container = styled(Box)``;

const VSCodeLayout = () => {
  return (
    <>
      <ToolbarLayout />

      <Container className={styles.container}>

        <SidebarLayout />


        <Box className={styles.main}>
          <Tabs
            value={0}
            TabIndicatorProps={{ style: { top: 0, bottom: 'auto' } }}
            indicatorColor="primary"
            textColor="inherit"
            className={styles.tabs}
          >
            <Tab label="AboutMe.tsx" className={styles.tab} sx={{ textTransform: 'none' }} />
            <Tab label="AboutMe2.tsx" className={styles.tab} sx={{ textTransform: 'none' }} />
          </Tabs>

          {/* 메인 에디터 영역 */}
          <Box className={styles.editor}>
            <h1>Welcome to My Portfolio</h1>
            <p>This is a VSCode themed portfolio.</p>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default VSCodeLayout;
