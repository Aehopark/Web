import styled from 'styled-components';

function FifthSection() {
  return (
    <SectionContainer>
      <LeftContent>
        <PlaceholderText>[애호박 캐릭터 이미지]</PlaceholderText>
      </LeftContent>
      <RightContent>
        <SmallText>"낮은 수수료 & 폭발적 판매량"</SmallText>
        <LargeTitle>저렴한 가격의 핵심은 판매자와의 상생입니다.</LargeTitle>
        <SmallText>
          애호박은 낮은 수수료와 실시간 가격반영을 통한 판매량 증대로, 
          판매자가 저가로도 수익을 내도록 적극 투자합니다.
        </SmallText>
        <FeaturesGrid>
          <FeatureGridItem>
            <FeatureValueBox>3%</FeatureValueBox>
            <FeatureLabel>판매 수수료율</FeatureLabel>
          </FeatureGridItem>
          <FeatureGridItem>
            <FeatureValueBox>무료</FeatureValueBox>
            <FeatureLabel>농산물 관리 서비스</FeatureLabel>
          </FeatureGridItem>
          <FeatureGridItem>
            <FeatureValueBox>1분</FeatureValueBox>
            <FeatureLabel>간편한 상품등록</FeatureLabel>
          </FeatureGridItem>
          <FeatureGridItem>
            <FeatureValueBox>상생</FeatureValueBox>
            <FeatureLabel>소상공인 목표</FeatureLabel>
          </FeatureGridItem>
        </FeaturesGrid>
        <SmallText>품질과 가격에 자신있다면 판매량 증가는 맡겨주세요!</SmallText>
        <Button>설치하기</Button>
      </RightContent>
    </SectionContainer>
  );
}

export default FifthSection;

const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 0;
`;

const LeftContent = styled.div`
  flex: 1;
  position: relative;
`;

const RightContent = styled.div`
  flex: 1;
  padding-left: 50px;
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

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 30px;
`;

const FeatureGridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FeatureValueBox = styled.div`
  background-color: #2E7D32;
  color: white;
  padding: 20px;
  text-align: center;
  border-radius: 8px;
  width: 100%;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const FeatureLabel = styled.div`
  font-size: 14px;
  color: #333;
  text-align: center;
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
  width: 100%;
  &:hover {
    background-color: #45a049;
  }
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