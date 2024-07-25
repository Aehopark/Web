import styled from 'styled-components';
import { ScrollAnimation } from '@lasbe/react-scroll-animation';

function FourthSection() {
  return (
    <ScrollAnimation startingPoint="bottom" duration={0.5} amount="sm" delay={0.1} repeat>
      <SectionContainer>
        <ContentContainer>
          <TextStack>
            <LargeTextFrame>
              애호박은 구매자 <span className="highlight">'만'</span> 신경쓰는 플랫폼이 아닙니다.
            </LargeTextFrame>
          </TextStack>
        </ContentContainer>
      </SectionContainer>
    </ScrollAnimation>
  );
}

export default FourthSection;

const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 0;
  margin-top: 150px;
  margin-bottom: 180px;
`;

const ContentContainer = styled.div`
  flex: 1;

  background: #10a36b;
  width: 4000px;
`;

const TextStack = styled.div`
  margin-bottom: 20px;
`;

const LargeTextFrame = styled.p`
  ${({ theme }) => theme.fonts.roboto_medium};
  margin: 20px 10px;
  padding-top: 10px;
  font-size: 22px;
  font-weight: 900;
  text-align: center;
  color: #ffffff;

  .highlight {
    color: yellow;
  }
`;
