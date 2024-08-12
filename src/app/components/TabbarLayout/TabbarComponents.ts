import { Tab, Tabs } from "@mui/material";
import styled from "styled-components";

export const CustomTabs = styled(Tabs)`
  background-color: #181818;
  min-height: 30px;
`;

export const CustomTab = styled(Tab)<{ isSelected: boolean }>`
  min-height: 30px;
  font-size: 12px;
  background-color: #1f1f1f;
  border-right: 1px solid #333;
  padding-right: 4px;
  border-bottom: 1px solid ${props => !props.isSelected ? '#333' : 'transparent'};
`;