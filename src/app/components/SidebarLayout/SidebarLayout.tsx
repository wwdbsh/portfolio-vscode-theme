import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import styles from '@/app/components/VSCodeLayout/layout.module.css';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { Tooltip, tooltipClasses, TooltipProps } from '@mui/material';
import ExplorerPanel from '@/app/components/ExplorerPanel/ExplorerPanel';

const SidebarButton = styled(IconButton).attrs({ disableRipple: true })``;

const CustomTooltip = styled(({ className, ...props }: TooltipProps & { className?: string }) => <Tooltip {...props} classes={{ popper: className }}>{props.children}</Tooltip>)`
  & .${tooltipClasses.tooltip} {
    background-color: #333;
    color: rgba(255, 255, 255, 0.8);
    font-size: 11px;
    border-radius: 3px;
    padding: 4px 8px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  }

  & .${tooltipClasses.arrow} {
    color: #333;
  }
`;

const SidebarIcon = styled.i<{ isActive: boolean }>`
  font-size: 20px !important;
  color: #c5c5c5;
  color: ${props => props.isActive ? 'white' : '#c5c5c5'};
  padding: 5px;
  cursor: pointer;
  
  &:hover {
    color: white;
  }
`;


const SidebarLayout = () => {
  const [isExplorerOpen, setExplorerOpen] = useState<boolean>(true);

  const handleExplorerClick = useCallback(() => {
    setExplorerOpen((prev) => !prev);
  }, []);

  return (
    <>
      <Box className={styles.sidebar}>
        <SidebarButton onClick={handleExplorerClick}>
          <CustomTooltip title="Explorer" placement="right" arrow>
            <SidebarIcon className="codicon codicon-files" isActive={isExplorerOpen} />
          </CustomTooltip>
        </SidebarButton>
        <SidebarButton>
          <CustomTooltip title="Search" placement="right" arrow>
            <SidebarIcon className="codicon codicon-search" isActive={false} />
          </CustomTooltip>
        </SidebarButton>
        <SidebarButton>
          <CustomTooltip title="Source Control" placement="right" arrow>
            <SidebarIcon className="codicon codicon-source-control" isActive={false} />
          </CustomTooltip>
        </SidebarButton>
        <SidebarButton>
          <CustomTooltip title="Run and Debug" placement="right" arrow>
            <SidebarIcon className="codicon codicon-debug-alt" isActive={false} />
          </CustomTooltip>
        </SidebarButton>
        <SidebarButton>
          <CustomTooltip title="Extensions" placement="right" arrow>
            <SidebarIcon className="codicon codicon-extensions" isActive={false} />
          </CustomTooltip>
        </SidebarButton>
      </Box>
      {isExplorerOpen && <ExplorerPanel />}
    </>
  );
};

export default SidebarLayout;