import { Box, Typography } from '@mui/material';
import styled from 'styled-components';

export const Container = styled(Box)`
  display: flex;
  justify-content: center;
  background-color: #1f1f1f;
  color: white;
  padding: 50px;
  border-radius: 10px;
`;

export const SubContainer = styled(Box)``;

export const Header = styled(Box)`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  gap: 20px;
  margin-bottom: 50px;
`;

export const AccountIcon = styled.i.attrs({ className: 'codicon codicon-account' })`
  font-size: 30px !important;
  color: white;
  background-color: rgba(255, 127, 80, 0.45);
  border-radius: 50%;
  box-shadow: 0 0 20px 10px rgba(255, 127, 80, 0.45);
`;

export const HeaderTitle = styled(Typography).attrs({ variant: 'h5' })``;

export const IntroductionContainer = styled(Box)`
  margin-bottom: 80px;
`;

export const Title = styled(Typography).attrs({ variant: 'h4' })``;

export const Highlight = styled.span`
  color: coral;
`;

export const ProfileContainer = styled(Box)``;

export const Row = styled(Box)`
  display: flex;
  flex-direction: row;
  margin-bottom: 60px;
`;

export const InfoContainer = styled(Box)`
  width: 50%;
`;

export const NameText = styled(Typography).attrs({ variant: 'h6' })`
  font-weight: bold;
  margin-bottom: 5px;
`;

export const JobTitle = styled(Typography).attrs({ variant: 'body1' })`
  color: coral;
  margin-bottom: 40px;
`;

export const IntroText = styled(Typography).attrs({ variant: 'body1' })`
  margin-bottom: 20px;
  opacity: 0.8;
`;

export const ProfileImage = styled.img`
  width: 200px;
  height: 250px;
  border-radius: 50%;
`;

export const LeftContainer = styled(Box)`
  width: 23%;
`;

export const LanguageTitle = styled(Typography).attrs({ variant: 'body1' })`
  color: coral;
  margin-bottom: 10px;
`; 

export const LanguageContainer = styled(Box)`
  width: 100%;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  padding: 10px 0;
`;

export const LanguageText = styled(Typography).attrs({ variant: 'body1' })``;

export const RightContainer = styled(Box)``;

export const EducationContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  padding: 30px 25px;
`;

export const CollegeImage = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 20px;
`;

export const CollegeInfoContainer = styled(Box)``;

export const CollegeText = styled(Typography).attrs({ variant: 'body1' })``;