import styled from "styled-components";
import { Box } from "@mui/material";
import { TreeItem2 } from "@mui/x-tree-view";

export const RootItem = styled(TreeItem2)`
  & .MuiTreeItem-content {
    display: flex;
    align-items: center;
  }

  & .MuiTreeItem-label {
    font-size: 10px;
    margin-left: -5px;
    color: #c5c5c5;
    font-weight: bold;
  }
`;

export const TItem = styled(TreeItem2)`
  & .MuiTreeItem-label {
    font-size: 12px !important;
    color: #c5c5c5;
    font-weight: normal !important;
  }

  & .MuiTreeItem-content:hover {
    background-color: rgba(255, 255, 255, 0.12);
  }
`;

export const ExplorerContainer = styled(Box)`
  width: 300px;
  background-color: #1e1e1e;
  color: #c5c5c5;
  border-right: 1px solid #333;
  z-index: 1;
`;