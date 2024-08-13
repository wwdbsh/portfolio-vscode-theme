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
  SubContainer
} from './AboutMeComponents';

const AboutMe = () => {
  return (
    <Container>
      <SubContainer>
        <Header>
          <AccountIcon />
          <HeaderTitle>About Me</HeaderTitle>
        </Header>

        <IntroductionContainer>
          <Title>
            I'm a <Highlight>software engineer</Highlight>
          </Title>
          <Title>
            specialized on <Highlight>Web & Mobile Applications</Highlight>
          </Title>
        </IntroductionContainer>

        <ProfileContainer>
          <Row style={{ gap: '15px' }}>
            <InfoContainer>
              <NameText>Sangheon Lee</NameText>
              <JobTitle>Full Stack Software Engineer</JobTitle>
              <IntroText>
                I'm an experienced software engineer who constantly seeks out innovative solutions to everyday problems.
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
      </SubContainer>
    </Container>
  );
};

export default AboutMe;