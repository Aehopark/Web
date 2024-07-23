import styled from 'styled-components';

function ThirdSection() {
  return (
    <SectionContainer>
      <LeftContent>
        <PhoneImageContainer>
          <PlaceholderText>[앱 스크린샷 이미지1]</PlaceholderText>
          <PlaceholderText>[앱 스크린샷 이미지2]</PlaceholderText>
        </PhoneImageContainer>
        <PlaceholderText>[애호박 캐릭터 이미지]</PlaceholderText>
      </LeftContent>
      <RightContent>
        <SmallText>"농장에서 식탁까지 무료 배송"</SmallText>
        <LargeTitle>알뜰하게 집에서 장보기</LargeTitle>
        <MediumText>더 이상 발로 뛰지 않고 모바일로 편하게 집에서 장보기 완료!</MediumText>
        <FeatureList>
          <FeatureListItem>소상공인들과의 직접적인 농산물 거래.</FeatureListItem>
          <FeatureListItem>농산물 직거래 기능으로, 최소값으로 구매 가능.</FeatureListItem>
        </FeatureList>
        <Button>설치하기</Button>
      </RightContent>
    </SectionContainer>
  );
}

export default ThirdSection;

const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 0;
`;

const LeftContent = styled.div`
  flex: 1;
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

const MediumText = styled.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 30px;
`;

const FeatureList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 30px;
`;

const FeatureListItem = styled.li`
  font-size: 16px;
  color: #333;
  margin-bottom: 15px;
  padding-left: 30px;
  position: relative;
  
  &:before {
    content: '•';
    position: absolute;
    left: 0;
    color: #4CAF50;
  }
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

const PhoneImageContainer = styled.div`
  display: flex;
  justify-content: center;
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