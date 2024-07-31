import styled from 'styled-components';
import img3 from '../assets/img3.png';
import mascot2 from '../assets/mascot2.png';
import { ScrollAnimation } from '@lasbe/react-scroll-animation';

function ThirdSection({ onMoveToInstallBtn }) {
  return (
    <ScrollAnimation startingPoint="bottom" duration={0.5} amount="sm" delay={0.1} repeat>
      <SectionContainer>
        <LeftContent>
          <PhoneImageContainer>
            <StyledImage src={img3} alt="image3" className="left" />
            <StyledImage src={img3} alt="image3" className="right" id="mobile" />
            <StyledImg src={mascot2} alt="mascot2" className="left" />
          </PhoneImageContainer>
        </LeftContent>
        <RightContent>
          <SmallText>"농장에서 식탁까지 무료 배송"</SmallText>
          <LargeText>알뜰하게 집에서 장보기</LargeText>
          <MediumText className="desktop">더 이상 발로 뛰지 않고 모바일로 편하게 집에서 장보기 완료!</MediumText>
          <MediumText className="mobile">
            끊임없는 쿠폰 이벤트와 함께, 팀 구매 플랫폼이기에
            <br />
            가능한 수많은 이벤트들을 놓치지 마세요!
          </MediumText>
          <FeatureList>
            <FeatureListItemDesktop>소상공인들과의 직접적인 농산물 거래.</FeatureListItemDesktop>
            <FeatureListItemDesktop>농산물 직거래 기능으로, 최소값으로 구매 가능.</FeatureListItemDesktop>
            <FeatureListItemMobile>소상공인들과의 직접적인 농산물 거래</FeatureListItemMobile>
            <FeatureListItemMobile>농산물 직거래 기능으로 최소값으로 구매 가능</FeatureListItemMobile>
          </FeatureList>
          <CTAButton onClick={onMoveToInstallBtn}>설치하기</CTAButton>
        </RightContent>
      </SectionContainer>
    </ScrollAnimation>
  );
}

export default ThirdSection;

const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 0;
  margin-top: 100px;
  margin-left: 100px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    margin-left: 0px;
  }
`;

const LeftContent = styled.div`
  flex: 1;
`;

const RightContent = styled.div`
  flex: 1;
  padding-left: 30px;
`;

const SmallText = styled.p`
  ${({ theme }) => theme.fonts.roboto_medium};
  font-size: 25px;
  font-weight: 800;
  color: #333;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    color: ${({ theme }) => theme.colors.pc1};
  }
`;

const LargeText = styled.h2`
  ${({ theme }) => theme.fonts.roboto_medium};
  font-size: 44px;
  line-height: 55px;
  font-weight: 900;
  color: #333;

  margin-bottom: 20px;
`;

const MediumText = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 70px;

  &.mobile {
    display: none;
  }

  @media (max-width: 768px) {
    padding-top: 10px;

    &.desktop {
      display: none;
    }

    &.mobile {
      display: inline;
    }
  }
`;

const FeatureList = styled.ul`
  list-style-type: none;
  margin-bottom: 30px;
  max-width: 450px;
`;

const FeatureListItemDesktop = styled.li`
  ${({ theme }) => theme.fonts.roboto_medium};
  color: ${({ theme }) => theme.colors.pc1};
  font-size: 15px;
  font-weight: 600;
  padding-left: 30px;
  position: relative;
  background: #ffffff;
  padding: 15px 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05), 0 -4px 8px rgba(0, 0, 0, 0.05), 4px 0 8px rgba(0, 0, 0, 0.05),
    -4px 0 8px rgba(0, 0, 0, 0.05);
  margin-top: 40px;
  margin-bottom: 40px;
  width: 500px;
  box-sizing: border-box;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    color: #4caf50;
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const FeatureListItemMobile = styled.li`
  color: black;
  margin-bottom: 25px;
  margin-top: 30px;
  ${({ theme }) => theme.fonts.roboto_medium};
  font-size: 18px;
  position: relative;
  padding-left: 30px;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    background-color: #4caf50;
    border-radius: 50%;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const CTAButton = styled.button`
  background-color: #10a36b;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;

  margin-top: 20px;
  padding-left: 30px;
  position: relative;
  border-radius: 10px;
  margin-bottom: 20px;

  width: 500px;
  box-sizing: border-box;

  &:hover {
    background-color: #45a049;
  }
  @media (max-width: 768px) {
    width: 95%;
  }
`;

const PhoneImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 600px;
  height: 500px;

  @media (max-width: 768px) {
    padding-left: 50px;
    padding-top: 50px;
  }
`;

const StyledImage = styled.img`
  width: 300px;
  height: 500px;
  border-radius: 20px;

  margin-right: -20px;
  &.left {
    margin-left: 160px;
    bottom: 20px;
    z-index: 1;
  }

  @media (max-width: 768px) {
    &#mobile {
      display: none;
    }
  }
`;

const StyledImg = styled.img`
  width: 180px;
  height: auto;
  position: absolute;
  bottom: 0;

  &.left {
    right: 380px;
    bottom: 20px;
    z-index: 1;
  }
`;
