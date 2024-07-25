import React from 'react';
import styled from 'styled-components';
import background from '../assets/background.png';

function SixthSection() {
  return (
    <BackgroundSection>
      <SectionOverlay>
        <ContentContainer>
          <StyledImage src={background } alt="background " />
        </ContentContainer>
      </SectionOverlay>
    </BackgroundSection>
  );
};

export default SixthSection;

const BackgroundSection = styled.div`
  background-image: url('/path-to-your-farm-worker-image.jpg');
  background-size: cover;
  background-position: center;
  height: 400px;
  position: relative;
  margin-bottom: 20%; 
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

const StyledImage = styled.img`
  width: 100%; 
  height: auto;
  margin-bottom: 10px; 
`;
