import React from 'react';
import styled from 'styled-components';
import mascot3 from '../assets/mascot3.png';

function FifthSection() {
  return (
    <SectionContainer>
      <LeftContent>
        <StyledImage src={mascot3} alt="mascot3" />
      </LeftContent>
      <RightContent>
        <SmallText>"낮은 수수료 & 폭발적 판매량"</SmallText>
        <LargeTitle>저렴한 가격의 핵심은 판매자와의 상생입니다.</LargeTitle>
        <SmallText1>
          애호박은 낮은 수수료와 실시간 가격반영을 통한 판매량 증대로, 
          판매자가 저가로도 수익을 내도록 적극 투자합니다.
        </SmallText1>
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
        <SmallText2>품질과 가격에 자신있다면 판매량 증가는 맡겨주세요!</SmallText2>
        <CTAButton>설치하기</CTAButton>
      </RightContent>
    </SectionContainer>
  );
};

export default FifthSection;

const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0; 
  margin-left: -50px; 
  margin-bottom: 10%;
  max-width:1200px; 
`;

const LeftContent = styled.div`
  flex: 1;
  display: flex;
  position: relative;
  justify-content: center; 
  align-items: flex-end;  
  height: 100%; 
`;

const RightContent = styled.div`
  flex: 1;
  padding-left: 20px; 
`;

const SmallText = styled.p`
  font-size: 24px;
  font-weight: 800;
  color: #333;
  margin-bottom: 10px;
  padding-left: 250px; 
`;

const LargeTitle = styled.h2`
${({ theme }) => theme.fonts.roboto_medium};
  font-size: 36px; 
  font-weight: 500;
  color: #333;
  margin-bottom: 20px;
  padding-bottom: 10px;
  padding-top: 10px;
  padding-left: 250px; 
  white-space: nowrap;
  line-height: 40px;
  text-shadow: -1px -1px 0 #333, 1px -1px 0 #333,-1px 1px 0 #333, 1px 1px 0 #333;
  
  
`;

const SmallText1 = styled.p`
  font-size: 15px; 
  color: #555555;
  padding-left: 250px; 
  white-space: nowrap;
  margin-bottom: 60px;
  letter-spacing: -2px;
`;

const SmallText2 = styled.p`
  font-size: 16px; 
  color: #555555;
  margin-left: 190px;
  white-space: nowrap;
  margin-top: 80px;
  margin-bottom: 20px;
  margin-left: 480px;
`;


const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  grid-template-rows: repeat(2, 1fr);    
  gap: 10px; 
  margin-bottom: 40px; 
  margin-left: 380px;
   
`;

const FeatureGridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px; 
  border-radius: 8px;
  
`;

const FeatureValueBox = styled.div`
  background-color: #054F2A;
  display: flex; 
  justify-content: center;
  align-items: center;
  width: 280px; 
  height: 120px;
  color: white;
  text-align: center;
  border-radius: 10px;
  font-size: 58px; 
  font-weight: 700;
  margin-bottom: 10px;
`;

const FeatureLabel = styled.div`
  font-weight: 900;
  font-size: 18px; 
  color: #333;
  text-align: center;
  
`;

const CTAButton = styled.button`
  background-color: #10A36B;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px; 
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  width: 100%;
  max-width:500px; 
  margin-left: 420px;
  margin-bottom: 150px;
  &:hover {
    background-color: #45a049;
  }
`;


const StyledImage = styled.img`
  width: 350px; 
  height: auto;
  margin-bottom: 100px; 
  margin-right: -600px; 
  
 `;

