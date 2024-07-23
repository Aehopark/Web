import styled from 'styled-components';

function SecondSection() {
  return (
    <SectionContainer>
      <LeftContent>
        <SectionTitle>"도매가 비교"</SectionTitle>
        <SectionTitle>주식처럼 실시간 가격비교</SectionTitle>
        <SectionSubtitle>텀브라더스에서 가장 저렴한 농산물을 실시간으로 찾아보세요</SectionSubtitle>
        <FeatureList>
          <FeatureListItem>오늘 식탁을 더 싸고 맛있게 즐길 수 있어요.</FeatureListItem>
          <FeatureListItem>오프라인별로 농산물 가격을 한 번에 확인할 수 있어요.</FeatureListItem>
          <FeatureListItem>가장 가격이 낮은 식재료가 어디서 파는지 알 수 있어요.</FeatureListItem>
        </FeatureList>
      </LeftContent>
      <RightContent>
        <PhoneImageContainer>
          <PlaceholderText>[앱 스크린샷 이미지1]</PlaceholderText>
          <PlaceholderText>[앱 스크린샷 이미지2]</PlaceholderText>
        </PhoneImageContainer>
        <PlaceholderText>[마스코트 이미지]</PlaceholderText>
        <SmallText>가장 싼 가격, 가장 맛있는 계절에 농산물을 주방에서 만나보세요.</SmallText>
      </RightContent>
    </SectionContainer>
  );
}

export default SecondSection;

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

const SectionTitle = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
`;

const SectionSubtitle = styled.p`
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

const PhoneImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const SmallText = styled.p`
  font-size: 16px;
  color: black;
  margin-bottom: 10px;
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