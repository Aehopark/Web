import React from 'react';
import styled from 'styled-components';

function FourthSection() {
  return (
    <SectionContainer>
      <ContentContainer>
        <TextStack>
          <LargeTextFrame>
            애호박은 구매자 <span className="highlight">'만'</span>  신경쓰는 플랫폼이 아닙니다.
          </LargeTextFrame>
        </TextStack>
      </ContentContainer>
    </SectionContainer>
  );
};

export default FourthSection;

const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 0;
  margin-top:150px;
  margin-bottom:180px;
`;

const ContentContainer = styled.div`
  flex: 1;
  
  background :#10A36B;
  width: 4000px; 
`;

const TextStack = styled.div`
  margin-bottom: 20px;
`;

const LargeTextFrame = styled.p`
 ${({ theme }) => theme.fonts.roboto_medium};
  margin: 20px 10px;
  padding-top:10px;
  font-size: 22px;
  font-weight: 900;
  text-align: center;
  color: #FFFFFF;

  .highlight {
    color: yellow;
  }
`;