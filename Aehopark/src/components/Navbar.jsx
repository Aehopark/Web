import styled from 'styled-components';

function Nav() {
  return (
    <Navbar>
      <Logo>Aehopark</Logo>
      <NavItems>
        <NavItem>이용정보</NavItem>
        <NavItem>문의하기</NavItem>
      </NavItems>
    </Navbar>
  );
}

export default Nav;

//navbar 제목은 제가 입혀놨어요 !! 폰트랑 컬러 이렇게 입혀주시면 됩니당

const Navbar = styled.nav`
  ${({ theme }) => theme.fonts.sansita_one}
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #4caf50;
`;

const NavItems = styled.div`
  display: flex;
`;

const NavItem = styled.a`
  margin-left: 20px;
  color: #333;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    color: #4caf50;
  }
`;
