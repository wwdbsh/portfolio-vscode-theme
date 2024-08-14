'use client';

import { Box } from '@mui/material';
import React from 'react';
import AboutMe from './components/SangheonLee/AboutMe/AboutMe';
import styled from 'styled-components';
import CustomParticles from './components/CustomParticles/CustomParticles';

const Container = styled(Box)``;

const Section = styled(Box)``;

const HomePage = () => {
  return (
    <Container>
      <CustomParticles />
      <Section id='about-me'>
        <AboutMe />
      </Section>
    </Container>
  );
}

export default HomePage;