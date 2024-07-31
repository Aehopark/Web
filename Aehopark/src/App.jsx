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
import ScrollUpBtn from './components/ScrollUpBtn';
import swal from 'sweetalert';
import './assets/css/App.css';

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

  const onMoveToInstallBtn = (event) => {
    if (event.target.innerText === '설치하기') {
      swal({
        title: '😭',
        text: '아직 어플리케이션이 출시 되지 않았어요. \n\n   조금만 더 기다려주세요!',
        // icon: 'info',
        button: '사전예약 하러 가기',
      }).then(seventhSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' }));
    }
  };

  return (
    <>
      <FirstSection onMoveToInstallBtn={onMoveToInstallBtn} />
      <AppContainer>
        <Nav onMoveToFocus={onMoveToFocus} />
        <div ref={secondSectionRef}>
          <TrashContainer></TrashContainer>
        </div>
        <SecondSection />
        <ThirdSection onMoveToInstallBtn={onMoveToInstallBtn} />
        <FourthSection />
        <FifthSection onMoveToInstallBtn={onMoveToInstallBtn} />
      </AppContainer>
      <SixthSection />

      <AppContainer>
        <div ref={seventhSectionRef}>
          <SeventhSection />
        </div>
        <EighthSection />
      </AppContainer>
      <Footer />
      <ScrollUpBtn />
    </>
  );
}

export default App;

const AppContainer = styled.div`
  height: 100%;
  max-width: 80%;
  min-width: 80vw;
  width: auto;
  margin: 0 auto;
  position: relative;
`;

//어플정보 누르면 살짝 가려서 중간에 trash container 만들어서 거기로 타겟팅 되게 했어요
const TrashContainer = styled.div`
  height: 10vh;
`;
