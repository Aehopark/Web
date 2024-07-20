import styled from 'styled-components';
import './assets/css/App.css';

function App() {
  return (
    <>
      <H1>Aehopark</H1>
    </>
  );
}

export default App;

//아래와 같은 방식으로 폰트와 컬러 사용하시면 됩니다!
const H1 = styled.h1`
  ${({ theme }) => theme.fonts.sansita_one}
  color: ${({ theme }) => theme.colors.pc1}
`;
