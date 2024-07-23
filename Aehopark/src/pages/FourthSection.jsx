import styled from 'styled-components';

function FourthSection() {
  return (
    <SectionContainer>
      <ContentContainer>
        <TextStack>
          <LargeTextFrame>
            애호박은 구매자'만' 신경쓰는 플랫폼이 아닙니다
          </LargeTextFrame>
        </TextStack>
      </ContentContainer>
    </SectionContainer>
  );
}

export default FourthSection;

const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 0;
`;

const ContentContainer = styled.div`
  flex: 1;
  margin-right: 20px;
`;

const TextStack = styled.div`
  margin-bottom: 20px;
`;

const LargeTextFrame = styled.p`
  margin: 20px 0;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: #333;
`;