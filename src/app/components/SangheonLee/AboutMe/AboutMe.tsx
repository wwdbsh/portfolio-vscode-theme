import React from 'react';
import {
  AccountIcon,
  Container,
  Header,
  HeaderTitle,
  Highlight,
  InfoContainer,
  IntroductionContainer,
  Title,
  JobTitle,
  NameText,
  ProfileContainer,
  Row,
  IntroText,
  ProfileImage,
  LeftContainer,
  RightContainer,
  LanguageTitle,
  LanguageContainer,
  LanguageText,
  EducationContainer,
  CollegeImage,
  CollegeInfoContainer,
  CollegeText,
  MoreInfoContainer,
  LinkedInIcon,
  LinkButton,
  GitHubIcon,
  ContactMeButton,
  ContactMeText
} from './AboutMeComponents';
import { githubUrl, linkedinUrl } from '@/utils/constatns';

const AboutMe = () => {
  return (
    <Container>
        <Header>
          <AccountIcon />
          <HeaderTitle>About Me</HeaderTitle>
        </Header>

        <IntroductionContainer>
          <Title>
            I&apos;m a <Highlight>Software Engineer</Highlight>
          </Title>
          <Title>
            specialized on <Highlight>Web &amp; Mobile Applications</Highlight>
          </Title>
        </IntroductionContainer>

        <ProfileContainer>
          <Row>
            <InfoContainer>
              <NameText>Sangheon Lee</NameText>
              <JobTitle>Full Stack Software Engineer</JobTitle>
              <IntroText>
                I&apos;m an experienced software engineer who constantly seeks out innovative solutions to everyday problems.
              </IntroText>
              <IntroText>
                After 5 years in this industry, I have worked with multiple front-end, back-end, mobile, and cloud technologies.
              </IntroText>
            </InfoContainer>
            <ProfileImage src='/me.png' alt='sangheon lee' />
          </Row>
          <Row>
            <LeftContainer>
              <LanguageTitle>| Languages</LanguageTitle>
              <LanguageContainer>
                <LanguageText>Korean - Native</LanguageText>
                <LanguageText>English - Advanced</LanguageText>
              </LanguageContainer>
              <MoreInfoContainer>
                <LinkButton href={linkedinUrl} target='_blank' >
                  <LinkedInIcon />
                </LinkButton>
                <LinkButton href={githubUrl} target="_blank">
                  <GitHubIcon />
                </LinkButton>
                <ContactMeButton>
                  <ContactMeText>Contact Me</ContactMeText>
                </ContactMeButton>
              </MoreInfoContainer>
            </LeftContainer>
            <RightContainer>
              <EducationContainer>
                <CollegeImage src='/albany-logo.png' alt='albany-logo' />
                <CollegeInfoContainer>
                  <CollegeText>Bachelor of Arts, Computer Science</CollegeText>
                  <CollegeText>SUNY, University at Albany</CollegeText>
                  <CollegeText>GPA: 3.75/4.00</CollegeText>
                </CollegeInfoContainer>
              </EducationContainer>
            </RightContainer>
          </Row>
        </ProfileContainer>
    </Container>
  );
};

export default AboutMe;