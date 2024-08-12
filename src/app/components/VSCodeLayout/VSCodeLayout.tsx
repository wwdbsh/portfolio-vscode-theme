'use client';

import React from 'react';
import styled from 'styled-components';
import styles from './layout.module.css';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ToolbarLayout from '@/app/components/ToolbarLayout/ToolbarLayout';
import SidebarLayout from '@/app/components/SidebarLayout/SidebarLayout';
import TabbarLayout from '@/app/components/TabbarLayout/TabbarLayout';

const Container = styled(Box)``;

const VSCodeLayout = () => {
  return (
      <Container className={styles.container}>
        <ToolbarLayout />
        <Box style={{ display: 'flex', marginTop: '31px', width: '100%' }}>
          <SidebarLayout />
          <Box className={styles.main}>
            <TabbarLayout />

            {/* 메인 에디터 영역 */}
            <Box className={styles.editor}>
              <h1>Welcome to My Portfolio</h1>
              <p>This is a VSCode themed portfolio.</p>
            </Box>
          </Box>
        </Box>
      </Container>
  );
}

export default VSCodeLayout;
