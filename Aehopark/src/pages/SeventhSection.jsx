import styled from 'styled-components';
import cart from '../assets/cart.png';
import shoppingBag from '../assets/shoppingBag.png'
import particle from '../assets/particle.png';
import { ScrollAnimation } from '@lasbe/react-scroll-animation';
import swal from 'sweetalert';
import { useState } from 'react';
import axios from 'axios';

function SeventhSection() {
  const [uname, setName] = useState('');
  const [uemail, setEmail] = useState('');
  const [uphone, setPhone] = useState('');

  const [isEmail, setIsEmail] = useState('');

  const [emailMsg, setEmailMsg] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .post(`${import.meta.env.VITE_BACKEND_SERVER_URL}/user/reserve`, {
        name: uname,
        email: uemail,
        phone: uphone,
      })
      .then((response) => {
        console.log('200', response.data);
        if (response.status === 200) {
          swal({
            text: '사전예약 되었습니다!',
            icon: 'success',
            button: '확인',
          });
          setName('');
          setEmail('');
          setPhone('');
        }
      })
      //error가 발생한다면 catch 하는 부분
      .catch((error) => {
        console.log(error.response);
        if (error.response.status === 409) {
          swal({
            icon: 'warning',
            text: '이미 가입된 이메일입니다! 조금만 기다려 주세요~😘',
            button: '확인',
          });
          setName('');
          setEmail('');
          setPhone('');
        } else if (error.response.status === 400) {
          swal({
            title: '😭',
            text: '잘못된 요청입니다!',
            button: '확인',
          });
          setName('');
          setEmail('');
          setPhone('');
        }
      });
  };

  const onChangeName = (e) => {
    const currentName = e.target.value;
    setName(currentName);
  };

  const onChangeEmail = (e) => {
    const currentEmail = e.target.value;
    setEmail(currentEmail);
    const emailRegExp = /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;

    if (!emailRegExp.test(currentEmail)) {
      setEmailMsg('이메일의 형식이 올바르지 않습니다');
      setIsEmail(false);
    } else {
      setIsEmail(true);
    }
  };

  const onChangePhone = (e) => {
    const currentPhone = e.target.value;
    setPhone(currentPhone);
  };

  return (
    <ScrollAnimation startingPoint="bottom" duration={0.5} amount="sm" delay={0.1} repeat>
      <SectionContainer>
        <LeftContent>
          <SmallText>애호박은 UMC 학생들끼리 개발중인 앱 서비스입니다.</SmallText>
          <LargeText>애호박과 함께 알찬 장바구니를 챙겨봐요!</LargeText>
          <ImageAndFormContainer>
            <StyledImage src={shoppingBag} alt="cart" className="shoppingBag" />
            <RegistrationForm onSubmit={submitHandler}>
              <Label>이름</Label>
              <InputField type="text" value={uname} onChange={onChangeName} placeholder="이름을 작성해주세요" />
              <Label>이메일</Label>
              <InputField type="email" value={uemail} onChange={onChangeEmail} placeholder="이메일을 작성해주세요" />
              <MsgP hidden={isEmail}>{emailMsg}</MsgP>

              <Label>전화번호</Label>
              <InputField
                type="tel"
                value={uphone}
                onChange={onChangePhone}
                placeholder="전화번호를 작성해주세요 (ex.01012341234)"
              />
              <SmallText1>
                저희 애호박은 고객님의 개인정보를 어플 개발 외에 사용하지 않는 것을 맹세하겠습니다.
              </SmallText1>
              <CTAButton>예약</CTAButton>
            </RegistrationForm>
          </ImageAndFormContainer>
        </LeftContent>
      </SectionContainer>
    </ScrollAnimation>
  );
}

export default SeventhSection;

const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 0;
  margin-bottom: 30%;
  /* margin-left: 300px; */
  margin-top: 100px;

  @media (max-width: 768px) {
    padding-left: 0px;
    margin-left: 0px;
  }
`;

const LeftContent = styled.div`
  flex: 1;
  position: relative;
  margin-left: 10px;

  @media (max-width: 768px) {
    margin-left: -40px;
  }
`;

const MsgP = styled.p`
  font-size: 12px;
  font-weight: 900;
  color: red;
  white-space: nowrap;
`;

const SmallText = styled.p`
  font-size: 24px;
  font-weight: 900;
  color: #555555;
  white-space: nowrap;
  padding-top: 5%;
  padding-bottom: 2%;
  margin-left: 105px;

  @media (max-width: 768px) {
    margin-left: 0px;
    font-size: 18px;
  }
`;

const SmallText1 = styled.p`
  font-size: 13px;
  font-weight: 900;
  color: #555555;
  white-space: nowrap;
  padding-top: 5%;
  padding-bottom: 2%;
`;

const LargeText = styled.h2`
  font-size: 36px;
  font-weight: 900;
  color: #333;
  margin-bottom: 20px;
  white-space: nowrap;
  margin-left: 100px;

  @media (max-width: 768px) {
    margin-left: 0px;
    font-size: 1.65em;
  }
`;

const ImageAndFormContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const RegistrationForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-left: 100px;
  background-color: '#DBDBDB';
  max-width: 700px;
  padding-left: 240px;

  @media (max-width: 768px) {
    padding-left: 0px;
    margin-left: 13px;
    margin-right: 100px;
    width: 85%;
  }
`;

const Label = styled.label`
  font-size: 20px;
  color: black;
  margin-bottom: 3px;
  font-weight: bold;
`;

const InputField = styled.input`
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 16px;
  width: 580px;
  background: #dbdbdb;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CTAButton = styled.button`
  background-color: #10a36b;
  color: white;
  padding: 15px 15px;
  padding-top: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 18px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  max-width: 650px;
  height: 45px;
  @media (max-width: 768px) {
    padding-left: 0px;
    width: 105%;
  }
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
  transform: scale(1.5);
  &.shoppingBag {
    position: relative;
    top: -180px;
  }

  @media (max-width: 768px) {
    margin-left: 130px;
    &.shoppingBag {
      position: relative;
      left: -150px;
      top: -70px;
    }
  }
`;
