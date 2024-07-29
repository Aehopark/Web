import styled from 'styled-components';
import ScrollBtnImg from '../assets/up.png';

function ScrollUpBtn() {
  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };
  return <ScrollBtn onClick={scrollToTop} src={ScrollBtnImg}></ScrollBtn>;
}

export default ScrollUpBtn;

const ScrollBtn = styled.img`
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 1000;
  height: 70px;
  width: 70px;
  padding-right: 20px;
  padding-bottom: 20px;
  opacity: 0.6;
  &:hover {
    transition: 0.7s, ease-in, 0.3s;
    opacity: 1;
  }
`;
