'use client';

import React from 'react';
import styled from 'styled-components';
import styles from '@/app/components/VSCodeLayout/layout.module.css';
import Box from '@mui/material/Box';
import ToolbarLayout from '@/app/components/ToolbarLayout/ToolbarLayout';
import SidebarLayout from '@/app/components/SidebarLayout/SidebarLayout';
import TabbarLayout from '@/app/components/TabbarLayout/TabbarLayout';

const Container = styled(Box)``;

const VSCodeLayout = ({children}: {children: React.ReactNode}) => {
  return (
      <Container className={styles.container}>
        <ToolbarLayout />
        <Box style={{ display: 'flex', marginTop: '31px', width: '100%' }}>
          <SidebarLayout />
          <Box className={styles.main}>
            <TabbarLayout />
            <Box className={styles.editor}>
              {children}
            </Box>
          </Box>
        </Box>
      </Container>
  );
}

export default VSCodeLayout;
