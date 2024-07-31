import styled from 'styled-components';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import section from '../assets/section_fix.png';
import { ScrollAnimation } from '@lasbe/react-scroll-animation';

function FirstSection({ onMoveToInstallBtn }) {
  return (
    <ScrollAnimation startingPoint="bottom" duration={0.5} amount="sm" delay={0.1} repeat>
      <SectionContainer>
        <ContentWrapper>
          <LeftSection>
            <PhoneImage>
              <StyledImage src={img1} alt="image1" className="left" />
              <StyledImage src={img2} alt="image2" className="center" />
              <StyledImage src={img3} alt="image3" className="right" />
            </PhoneImage>
          </LeftSection>
          <RightSection>
            <LogoLarge className="desktop">Aehopark</LogoLarge>
            <Title1>
              알뜰 장보기,
              <br />
            </Title1>
            <Title2>
              <span className="mobileText">이제</span>집에서 손쉽게
            </Title2>
            <LogoLarge className="mobile">Aehopark</LogoLarge>
            <Subtitle>
              <span>#심플한 가격비교</span> <span>#애호박으로 최저가 장보기</span>
            </Subtitle>
            <CTAButton onClick={onMoveToInstallBtn}>
              <span className="desktop">설치하기</span>
              <span className="mobile">설치하기</span>
            </CTAButton>
          </RightSection>
        </ContentWrapper>
        <BackgroundPlaceholder>
          <StyledSection src={section} alt="section" />
        </BackgroundPlaceholder>
      </SectionContainer>
    </ScrollAnimation>
  );
}

export default FirstSection;

const SectionContainer = styled.div`
  position: relative;
  padding: 50px 0;
  margin-top: 80px; //퍼스트 섹션 빼려고 넣은 거에요. 합의 후 조정 필요
  @media (max-width: 768px) {
    margin-top: 0%;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  z-index: 1;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

const LeftSection = styled.div`
  flex: 1;
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 200px;

  @media (max-width: 768px) {
    padding-left: 10px;
  }
`;

const PhoneImage = styled.div`
  width: 100%;
  max-width: 500px;
  height: 500px;

  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const LogoLarge = styled.div`
  ${({ theme }) => theme.fonts.sansita_one};
  color: ${({ theme }) => theme.colors.pc1};
  font-size: 100px;
  font-weight: 900;
  margin-bottom: 20px;

  &.mobile {
    display: none;
  }

  @media (max-width: 768px) {
    transform: scale(0.9);
    opacity: 0.8;

    &.desktop {
      display: none;
    }

    &.mobile {
      display: inline;
    }
  }
`;

const Title1 = styled.h1`
  ${({ theme }) => theme.fonts.roboto_medium};
  color: #333;
  font-size: 34px;
  margin-bottom: 20px;
  font-weight: 900;
  padding-top: 30px;
  transform: scaleY(1.09);

  @media (max-width: 768px) {
    flex: 1;
  }
`;

const Title2 = styled.h1`
  ${({ theme }) => theme.fonts.roboto_medium};
  font-size: 42px;
  color: #333;
  margin-bottom: 30px;
  font-weight: 900;
  transform: scaleY(1.08);

  @media (max-width: 768px) {
    .mobileText {
      font-size: 25px;
    }
  }
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.black};
  padding-top: 10px;
  margin-bottom: 40px;
  ${({ theme }) => theme.fonts.roboto_medium}
  font-weight: 1000;

  @media (max-width: 768px) {
    font-size: 22px;
    font-weight: bold;

    & > span {
      display: block;
    }
  }
`;

const CTAButton = styled.button`
  background-color: #10a36b;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  width: 450px;
  height: 50px;
  font-size: 18px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #45a049;
  }

  .mobile {
    display: none;
  }

  @media (max-width: 768px) {
    width: 150px;
    margin-left: 29%;

    .desktop {
      display: none;
    }

    .mobile {
      display: inline;
    }
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
  opacity: 0.45;
  z-index: 0;
`;

const StyledImage = styled.img`
  width: 280px;
  height: 500px;
  position: absolute;
  border-radius: 20px;
  transition: transform 0.3s ease;

  &.left {
    left: 214;
    z-index: 3;
  }

  &.center {
    z-index: 2;
    transform: translateX(120px);
  }

  &.right {
    right: 0;
    z-index: 1;
    transform: translateX(151px);
  }

  @media (max-width: 768px) {
    display: none;

    &.left {
      display: block;
      opacity: 1;
    }
  }
`;

const StyledSection = styled.img`
  width: 100vw;
  height: 100%;
  object-fit: cover;
`;
