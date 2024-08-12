import React from 'react';
import VSCodeLayout from './components/VSCodeLayout/VSCodeLayout';
import { TabProvider } from './contexts/TabContext';

const HomePage = () => {
  return (
    <TabProvider>
      <VSCodeLayout />
    </TabProvider>
  );
}

export default HomePage;