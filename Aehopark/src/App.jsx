import styled from 'styled-components';
import './assets/css/App.css';

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

function App() {
  return (
    <AppContainer>
      <Navbar />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
      <EighthSection></EighthSection>
      <Footer />
    </AppContainer>
  );
}

export default App;
//아래와 같은 방식으로 폰트와 컬러 사용하시면 됩니다!
const H1 = styled.h1`
  ${({ theme }) => theme.fonts.sansita_one};
  color: ${({ theme }) => theme.colors.pc1};
`;

const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
  position: relative;
`;
