import styled from 'styled-components';

function SixthSection() {
  return (
    <BackgroundSection>
      <SectionOverlay>
        <ContentContainer>
          <SmallText>"농장에서 식탁으로"</SmallText>
          <LargeTitle>가장 저렴한 제철 식품을 만나보세요</LargeTitle>
        </ContentContainer>
      </SectionOverlay>
    </BackgroundSection>
  );
}

export default SixthSection;

const BackgroundSection = styled.div`
  background-image: url('/path-to-your-farm-worker-image.jpg');
  background-size: cover;
  background-position: center;
  height: 400px;
  position: relative;
`;

const SectionOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentContainer = styled.div`
  text-align: center;
`;

const SmallText = styled.p`
  font-size: 16px;
  color: white;
  margin-bottom: 10px;
`;

const LargeTitle = styled.h2`
  font-size: 36px;
  font-weight: bold;
  color: white;
  margin-bottom: 20px;
`;