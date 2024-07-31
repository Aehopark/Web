import styled from 'styled-components';
import background from '../assets/background.png';
import { ScrollAnimation } from '@lasbe/react-scroll-animation';

function SixthSection() {
  return (
    <ScrollAnimation startingPoint="bottom" duration={0.5} amount="sm" delay={0.1} repeat>
      <StyledImage src={background} alt="background " />
    </ScrollAnimation>
  );
}

export default SixthSection;

const StyledImage = styled.img`
  width: 100vw;
  height: auto;
  margin-bottom: 10px;
`;
