import React from 'react';
import styled from 'styled-components';
import cart from '../assets/cart.png';
import particle from '../assets/particle.png';

function SeventhSection() {
  return (
    <SectionContainer>
      <LeftContent>
        <SmallText>애호박은 UMC 학생들끼리 개발중인 앱 서비스입니다.</SmallText>
        <LargeTitle>애호박과 함께 알찬 장바구니를 챙겨봐요!</LargeTitle>
        <ImageAndFormContainer>
          <StyledImage src={cart} alt="cart"  className='bottom'  />
          <RegistrationForm>
            <Label>이름</Label>
            <InputField  type="text" placeholder="이름을 작성해주세요" />
            <Label>이메일</Label>
            <InputField type="email" placeholder="이메일을 작성해주세요" />
            <Label>전화번호</Label>
            <InputField type="tel" placeholder="전화번호를 작성해주세요" />
            <SmallText1>저희 애호박은 고객님의 개인정보를 어플 개발 외에 사용하지 않는 것을 맹세하겠습니다.</SmallText1>
            <CTAButton>예약</CTAButton>
          </RegistrationForm>
        </ImageAndFormContainer>
        <StyledImage src={particle} alt="particle" className='top' />
      </LeftContent>

    </SectionContainer>
  );
}

export default SeventhSection;

const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 0;
  margin-bottom: 30%;
  
`;

const LeftContent = styled.div`
  flex: 1;
  position: relative;
  margin-left:10px;
`;



const SmallText = styled.p`
  font-size: 24px;
  font-weight: 900;
  color: #555555;
  white-space: nowrap;
  padding-top: 5%;
  padding-bottom: 2%;
  margin-left:105px;
  
`;
const SmallText1 = styled.p`
  font-size: 13px;
  font-weight: 900;
  color: #555555;
  white-space: nowrap;
  padding-top: 5%;
  padding-bottom: 2%;
  `;

const LargeTitle = styled.h2`
  font-size: 36px;
  font-weight: 900;
  color: #333;
  margin-bottom: 20px;
  white-space: nowrap;
  margin-left:100px;
 
`;

const ImageAndFormContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
`;

const RegistrationForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-left: 100px;
  background-color:'#DBDBDB';
  max-width:800px;
  padding-left:200px;
`;

const Label = styled.label`
  font-size: 20px;
  color: black;
  margin-bottom: 3px;
  font-weight: bold;
`;

const InputField = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 16px;
  width:580px;
  background:#DBDBDB;
  
`;

const CTAButton = styled.button`
  background-color: #10A36B;
  color: white;
  padding: 15px 15px;
  padding-top:10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 18px;
  border: none;
  border-radius:10px;
  cursor: pointer;
  font-weight: bold;
  max-width:600px;
  height: 45px;
  &:hover {
    background-color: #45a049;
  }
`;


const StyledImage = styled.img`
  margin-top: 100px;
  margin-left: 200px;
  margin-right: -100px;
  width: 300px;
  height: 300px;
  border-radius: 20px;
  padding-top: 10%;
  &.top {
    position: absolute;
    top: 40px;
    z-index: 1;

  }

 &.bottom {
   /*position: absolute;*/
    bottom: -100px; 
    z-index: 1;
 
  }

`;
