import React from 'react';
import styled from 'styled-components';
import styles from '@/app/components/ToolbarLayout/layout.module.css';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import MinimizeIcon from '@mui/icons-material/Minimize';
import CropSquareIcon from '@mui/icons-material/CropSquare';
import CloseIcon from '@mui/icons-material/Close';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import { toolbarItems } from '@/utils/constatns';
import IconButton from '@mui/material/IconButton';

const VSCodeLogo = styled.img`
  width: 15px;
  height: 15px;
  margin-bottom: 2px;
  margin-right: 3px;
`;

const CustomToolbar = styled(Toolbar)`
  align-items: center;
  justify-content: space-between;
  @media (min-width: 600px) {
    padding-left: 10px !important;
    padding-right: 0 !important;
  }
`;

const LeftToolbarGroup = styled(Box)`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const RightToolbarGroup = styled(Box)`
  display: flex;
  align-items: center;
  gap: 0;
`;

const ToolbarButton = styled(IconButton).attrs({ disableRipple: true })`
  background-color: transparent;
  border-radius: 5px;
  padding: 3px 5px;
  &:hover {
    background-color: #434343;
  }
`;

const ToolbarControlButton = styled(IconButton).attrs({ disableRipple: true })`
  background-color: transparent;
  border-radius: 0px;
  padding: 10px 15px;
  &:hover {
    background-color: #434343;
  }
`;

const ToolbarCloseButton = styled(ToolbarControlButton).attrs({ disableRipple: true })`
  &:hover {
    background-color: #E81123;
    svg {
      color: white;
    }
  }
`;

const ToolbarLayout = () => (
  <AppBar position="absolute" className={styles.tabBar}>
    <CustomToolbar variant="dense">
      <LeftToolbarGroup>
        <VSCodeLogo src="/vscode-logo.png" alt="vscode-logo" />
        {toolbarItems.map((item) => (
          <ToolbarButton key={item}>
            <Typography variant="caption" sx={{ color: '#979797' }}>
              {item}
            </Typography>
          </ToolbarButton>
        ))}
      </LeftToolbarGroup>
      <Typography variant="caption">
        Sangheon Lee - Portfolio
      </Typography>
      <RightToolbarGroup>
        <ToolbarControlButton>
          <MinimizeIcon sx={{ color: '#979797', transform: 'translateY(-5px)', fontSize: 17 }} />
        </ToolbarControlButton>
        <ToolbarControlButton>
          <CropSquareIcon sx={{ color: '#979797', fontSize: 17 }} />
        </ToolbarControlButton>
        <ToolbarCloseButton>
          <CloseIcon sx={{ color: '#979797', fontSize: 17}} />
        </ToolbarCloseButton>
      </RightToolbarGroup>
    </CustomToolbar>
  </AppBar>
)

export default ToolbarLayout;