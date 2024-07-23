import styled from 'styled-components';

function EighthSection() {
  return (
    <SectionContainer>
      <LeftSection>
        <PlaceholderText>[애호박 이미지]</PlaceholderText>
      </LeftSection>
      <RightSection>
        <SmallText>대표 방유찬</SmallText>
        <SmallText>이메일 : Kdoo9350@naver.com</SmallText>
        <SmallText>연락처 : 010-9350-8862</SmallText>
        <SmallText>주소 : 진주시 진주대로 501 508호</SmallText>
      </RightSection>
    </SectionContainer>
  );
}

export default EighthSection;

const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 0;
`;

const LeftSection = styled.div`
  flex: 1;
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const SmallText = styled.p`
  font-size: 16px;
  color: black;
  margin-bottom: 10px;
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