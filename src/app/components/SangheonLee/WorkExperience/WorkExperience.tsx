import React from 'react';
import {
  Container,
  BriefcaseIcon,
  Header,
  HeaderTitle,
  Highlight,
  IntroductionContainer,
  Title,
} from '@/app/components/SangheonLee/WorkExperience/WorkExperienceComponents';

const WorkExperience = () => {
  return (
    <Container>
        <Header>
          <BriefcaseIcon />
          <HeaderTitle>Work Experience</HeaderTitle>
        </Header>

        <IntroductionContainer>
          <Title>
            <Highlight>Software Engineer</Highlight> with <Highlight>5 Years</Highlight>
          </Title>
          <Title>
            of experience in the softwre industry
          </Title>
        </IntroductionContainer>

    </Container>
  );
};

export default WorkExperience;