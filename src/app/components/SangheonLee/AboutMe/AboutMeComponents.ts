import styled from 'styled-components';
import { Box, Button, IconButton, Link, Typography } from '@mui/material';

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
  width: 70%;
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
  z-index: 1;
`;

export const LeftContainer = styled(Box)`
  width: 40%;
`;

export const LanguageTitle = styled(Typography).attrs({ variant: 'body1' })`
  color: coral;
  margin-bottom: 10px;
`; 

export const LanguageContainer = styled(Box)`
  width: 100%;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  padding: 10px 0;
`;

export const LanguageText = styled(Typography).attrs({ variant: 'body1' })``;

export const MoreInfoContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const LinkButton = styled(Link)`
  text-decoration: none;
`;

export const IconClickButton = styled(IconButton)``;

export const LinkedInIcon = styled.i.attrs({ className: 'devicon-linkedin-plain' })`
  font-size: 30px !important;
  color: white;
  margin-right: 15px;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.7;
  }
`;

export const GitHubIcon = styled.i.attrs({ className: 'devicon-github-original' })`
  font-size: 30px !important;
  color: white;
  margin-right: 15px;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.7;
  }
`;

export const ContactMeButton = styled(Button).attrs({ disableRipple: true })`
  background-color: white;
  color: #1f1f1f;
  border-radius: 20px;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

  &:hover {
    background-color: coral;
    color: white;
  }
`;

export const ContactMeText = styled(Typography)`
  font-size: 12px;
`;

export const RightContainer = styled(Box)`
  width: 60%;
`;

export const EducationContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  padding: 45px 10px;
`;

export const CollegeImage = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 20px;
  z-index: 1;
`;

export const CollegeInfoContainer = styled(Box)``;

export const CollegeText = styled(Typography).attrs({ variant: 'body2' })``;