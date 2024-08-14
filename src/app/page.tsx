'use client';

import React from 'react';
import styled from 'styled-components';
import { Box } from '@mui/material';
import AboutMe from '@/app/components/SangheonLee/AboutMe/AboutMe';
import CustomParticles from '@/app/components/CustomParticles/CustomParticles';
import WorkExperience from '@/app/components/SangheonLee/WorkExperience/WorkExperience';

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