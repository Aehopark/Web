import React from 'react';
import styled from 'styled-components';
import mascot4 from '../assets/mascot4.png';

function EighthSection() {
  return (
    <SectionContainer>
      <LeftSection>
        <StyledImage src={mascot4} alt="mascot4"/>
      </LeftSection>
      <RightSection>
        <SmallText>&nbsp;대표 방유찬</SmallText>
        <SmallText>&nbsp;이메일&nbsp;:&nbsp;kdoo9350@naver.com</SmallText>
        <SmallText>&nbsp;연락처&nbsp;:&nbsp;010-9350-8862</SmallText>
        <SmallText>&nbsp;주소&nbsp;:진주시&nbsp;진주대로&nbsp;501&nbsp;508호</SmallText>
      </RightSection>
    </SectionContainer>
  );
};

export default EighthSection;

const SectionContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const LeftSection = styled.div`
  flex: 1;
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: -190px; 
  margin-right: 100px; 
`;

const SmallText = styled.p`
  font-size: 18px;
  color: black;
  margin-bottom: 10px;
  text-align: right;
`;

const StyledImage = styled.img`
  width: 280px;
  height: 200px;
  margin-left: 200px; 
  margin-bottom: 300px;
`;
