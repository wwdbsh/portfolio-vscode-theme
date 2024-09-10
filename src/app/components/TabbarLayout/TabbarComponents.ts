import styled from "styled-components";
import { Tab, Tabs } from "@mui/material";

export const CustomTabs = styled(Tabs)`
  background-color: #181818;
  min-height: 30px;
  z-index: 1;
`;

export const CustomTab = styled(Tab)<{ isSelected: boolean }>`
  min-height: 30px;
  font-size: 12px;
  background-color: #1f1f1f;
  border-right: 1px solid #333;
  padding-right: 4px;
  border-bottom: 1px solid ${props => !props.isSelected ? '#333' : 'transparent'};
`;