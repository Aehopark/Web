import React from 'react';

import Navbar from './components/Navbar';

import FirstSection from './pages/FirstSection';
import SecondSection from './pages/SecondSection';
import ThirdSection from './pages/ThirdSection';
import FourthSection from './pages/FourthSection';
import FifthSection from './pages/FifthSection';
import SixthSection from './pages/SixthSection';
import SeventhSection from './pages/SeventhSection';
import EighthSection from './pages/EighthSection';
import Footer from './components/Footer';

import styled, { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

function App() {
  return (

  <ThemeProvider theme={theme}>
    <AppContainer>
      <Navbar />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
      <EighthSection />
      <Footer />
    </AppContainer>
  </ThemeProvider>

  );
}

export default App;

const AppContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  background-color: #ffffff;
  position: relative;
`;
