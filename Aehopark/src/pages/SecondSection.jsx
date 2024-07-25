import React from 'react';
import styled from 'styled-components';
import img2 from '../assets/img2.png';
import mascot from '../assets/mascot.png';
import money from '../assets/money.png';


function SecondSection() {
  return (
    <SectionContainer>
      <LeftContent>
        <SectionTitle1>"도매가 비교"</SectionTitle1>
        <SectionTitle2>주식처럼 실시간 가격비교</SectionTitle2>
        <SectionSubtitle>애호박에서 가장 저렴한 농산물을 실시간으로 찾아보세요!</SectionSubtitle>
        <FeatureList>
          <FeatureListItem>오늘 식탁을 더 싸고 맛있게 즐길 수 있어요.</FeatureListItem>
          <FeatureListItem>오프라인별로 농산물 가격을 한 번에 확인할 수 있어요.</FeatureListItem>
          <FeatureListItem>가장 가격이 낮은 식재료가 어디서 파는지 알 수 있어요.</FeatureListItem>
        </FeatureList>
      </LeftContent>
      <RightContent>
        <PhoneImageContainer>
          <StyledImage src={img2} alt="image2" />
          <StyledImage src={img2} alt="image2" />
          <StyledImg src={mascot} alt="mascot" className="left" />
          <StyledImg src={money} alt="money" className="right"/>
        </PhoneImageContainer>
         
        <SmallText>가장 싼 가격, 가장 맛있는 계절에 농산물을 주방에서 만나보세요.</SmallText>
      </RightContent>
    </SectionContainer>
  );
};

export default SecondSection;

const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 0;
  margin-top:150px;
`;

const LeftContent = styled.div`
  flex: 1;
  margin-left: 100px;
`;

const RightContent = styled.div`
  flex: 1;
  padding-left: 50px;
`;

const SectionTitle1 = styled.h2`
 ${({ theme }) => theme.fonts.roboto_medium};
  font-size: 28px;
  font-weight: 900;
  color: #333;
  margin-bottom: 30px;
 
`;
const SectionTitle2 = styled.h2`
 ${({ theme }) => theme.fonts.roboto_medium};
  font-size: 46px;
  font-weight:500;
  color: #333;
  margin-bottom: 30px;
  line-height: 40px;
  text-shadow: -1px -1px 0 #333, 1px -1px 0 #333, -1px 1px 0 #333, 1px 1px 0 #333;
`;


const SectionSubtitle = styled.p`
  font-size: 17px;
  color: #666;
  margin-bottom: 50px;
`;

const FeatureList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 30px;

  
`;

const FeatureListItem = styled.li`
  margin-top: 30px;
  ${({ theme }) => theme.fonts.roboto_medium};
  color: ${({ theme }) => theme.colors.pc1};
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 15px;
  padding-left: 30px;
  position: relative;
  white-space: nowrap;
  background: #fff;
  padding: 12px 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05),
              0 -4px 8px rgba(0, 0, 0, 0.05), 
              4px 0 8px rgba(0, 0, 0, 0.05), 
              -4px 0 8px rgba(0, 0, 0, 0.05);
  margin-bottom: 20px;
  max-width: 400px;
  `;


const PhoneImageContainer = styled.div`
  display: flex;
  justify-content: space-between; 
  align-items: center;
  position: relative;
  width: 400px; 
  height: 500px;

`;

const SmallText = styled.p`
  font-size: 13px;
  color: black;
  margin-bottom: 30px;
  margin-left: -50px;
`;

const StyledImage = styled.img`
  width: 300px;
  height: 500px;
  border-radius: 20px;
  margin-left: -50px;
  margin-right: 30px;
 
`;


const StyledImg = styled.img`
  width: 180px;
  height: auto;
  position: absolute;
  bottom: 0;

  &.left {
    right: -120px;
    bottom: 20px;
    z-index: 1;
  }

  &.right {
    width: 130px;
    right: -150px;
    z-index: 2;
  }
`;