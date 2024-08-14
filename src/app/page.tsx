'use client';

import { Box } from '@mui/material';
import React from 'react';
import AboutMe from './components/SangheonLee/AboutMe/AboutMe';
import styled from 'styled-components';
import CustomParticles from './components/CustomParticles/CustomParticles';
import WorkExperience from './components/SangheonLee/WorkExperience/WorkExperience';

const Container = styled(Box)`
  max-width: fit-content;
  margin: 0 auto; 
`;

const Section = styled(Box)``;

const HomePage = () => {
  return (
    <Container>
      <CustomParticles />
      <Section id='about-me'>
        <AboutMe />
      </Section>
      <Section id="work-experience">
        <WorkExperience />
      </Section>
    </Container>
  );
}

export default HomePage;