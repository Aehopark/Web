import styled from 'styled-components';

function FirstSection() {
  return (
    <SectionContainer>
      <ContentWrapper>
        <LeftSection>
          <PhoneImage>
            <PlaceholderText>[앱 스크린샷 이미지]</PlaceholderText>
            <PlaceholderText>[앱 스크린샷 이미지]</PlaceholderText>
            <PlaceholderText>[앱 스크린샷 이미지]</PlaceholderText>
          </PhoneImage>
        </LeftSection>
        <RightSection>
          <LogoLarge>Aehopark</LogoLarge>
          <LargeTitle>알뜰 장보기,<br />집에서 손쉽게</LargeTitle>
          <SmallText>#싱싱한 가격비교 #애호박으로 최저가 장보기</SmallText>
          <Button>설치하기</Button>
        </RightSection>
      </ContentWrapper>
      <BackgroundPlaceholder>
        [배경 이미지: 채소와 과일 조각들]
      </BackgroundPlaceholder>
    </SectionContainer>
  );
}

export default FirstSection;

const SectionContainer = styled.div`
  position: relative;
  padding: 50px 0;
  background-color: #f0f8f0; // 연한 녹색 배경
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  z-index: 1;
  position: relative;
`;

const LeftSection = styled.div`
  flex: 1;
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const PhoneImage = styled.div`
  width: 100%;
  max-width: 500px;
  height: 500px;
  background-color: #ffffff;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
`;

const LogoLarge = styled.div`
  font-size: 48px;
  font-weight: bold;
  color: #4CAF50;
  margin-bottom: 20px;
`;

const SmallText = styled.p`
  font-size: 16px;
  color: black;
  margin-bottom: 10px;
`;

const LargeTitle = styled.h2`
  font-size: 36px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background-color: #45a049;
  }
`;

const BackgroundPlaceholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: #aaa;
  opacity: 0.3;
  z-index: 0;
`;

const PlaceholderText = styled.div`
  background-color: rgba(224, 224, 224, 0.9);
  color: #333;
  padding: 10px;
  text-align: center;
  font-style: italic;
  font-weight: bold;
  border: 1px dashed #666;
  margin: 10px;
`;