import Nav from './components/Navbar';
import FirstSection from './pages/FirstSection';
import SecondSection from './pages/SecondSection';
import ThirdSection from './pages/ThirdSection';
import FourthSection from './pages/FourthSection';
import FifthSection from './pages/FifthSection';
import SixthSection from './pages/SixthSection';
import SeventhSection from './pages/SeventhSection';
import EighthSection from './pages/EighthSection';
import Footer from './components/Footer';
import { useRef } from 'react';
import styled from 'styled-components';

function App() {
  const secondSectionRef = useRef(null);
  const seventhSectionRef = useRef(null);

  const onMoveToFocus = (event) => {
    if (event.target.innerText === '어플정보') {
      secondSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (event.target.innerText === '예약하기') {
      seventhSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <AppContainer>
      <Nav onMoveToFocus={onMoveToFocus} />
      <FirstSection />
      <div ref={secondSectionRef}>
        <TrashContainer></TrashContainer>
      </div>
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <div ref={seventhSectionRef}>
        <SeventhSection />
      </div>
      <EighthSection />
      <Footer />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  height: 100vh;
  max-width: 1400px;
  margin: 0 auto;
  background-color: #ffffff;
  position: relative;
  margin-top: 90px;
`;

//어플정보 누르면 살짝 가려서 중간에 trash container 만들어서 거기로 타겟팅 되게 했어요
const TrashContainer = styled.div`
  height: 10vh;
`;
