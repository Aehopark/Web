import styled from 'styled-components';

function SeventhSection() {
  return (
    <SectionContainer>
      <LeftContent>
        <SmallText>애호박은 UMC 학생들끼리 개발중인 앱 서비스입니다.</SmallText>
        <LargeTitle>애호박과 함께 알찬 장바구니를 챙겨봐요!</LargeTitle>
        <PlaceholderText>[장바구니 일러스트레이션]</PlaceholderText>
      </LeftContent>
      <RightContent>
        <RegistrationForm>
          <InputField type="text" placeholder="이름을 작성해주세요" />
          <InputField type="email" placeholder="이메일을 작성해주세요" />
          <InputField type="tel" placeholder="전화번호를 작성해주세요" />
          <SmallText>저희 애호박은 고객님의 개인정보를 어플 개발 외에 사용하지 않는 것을 맹세하겠습니다.</SmallText>
          <Button>예약</Button>
        </RegistrationForm>
      </RightContent>
    </SectionContainer>
  );
}

export default SeventhSection;

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

const SmallText = styled.p`
  font-size: 16px;
  color: black;
  margin-bottom: 10px;
`;

const LargeTitle = styled.h2`
  font-size: 36px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
`;

const RegistrationForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
`;

const InputField = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const Button = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  width: 100%;
  &:hover {
    background-color: #45a049;
  }
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