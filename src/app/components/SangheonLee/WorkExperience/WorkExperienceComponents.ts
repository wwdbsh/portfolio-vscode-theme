import { Box, Typography } from '@mui/material';
import styled from 'styled-components';

export const Container = styled(Box)`
  background-color: #1f1f1f;
  color: white;
  padding: 50px;
  border-radius: 10px;
  margin-bottom: 70px;
  max-width: 750px;
`;

export const Header = styled(Box)`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 50px;
`;

export const BriefcaseIcon = styled.i.attrs({ className: 'codicon codicon-briefcase' })`
  font-size: 30px !important;
  color: white;
  background-color: rgba(173, 255, 47, 0.45);
  border-radius: 50%;
  box-shadow: 0 0 20px 10px rgba(173, 255, 47, 0.45);
`;

export const HeaderTitle = styled(Typography).attrs({ variant: 'h5' })``;

export const IntroductionContainer = styled(Box)`
  margin-bottom: 80px;
`;

export const Title = styled(Typography).attrs({ variant: 'h4' })``;

export const Highlight = styled.span`
  color: greenyellow;
`;