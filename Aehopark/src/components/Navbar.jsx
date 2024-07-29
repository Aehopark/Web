import styled from 'styled-components';

function Nav({ onMoveToFocus }) {
  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <Navbar>
      <Logo onClick={scrollToTop}>Aehopark</Logo>
      <NavItems>
        <NavItem onClick={onMoveToFocus}>어플정보</NavItem>
        <NavItem onClick={onMoveToFocus}>예약하기</NavItem>
      </NavItems>
    </Navbar>
  );
}

export default Nav;

const Navbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: white;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Logo = styled.div`
  ${({ theme }) => theme.fonts.sansita_one};
  font-size: 32px;
  color: ${({ theme }) => theme.colors.pc1};
  width: 200px;
  height: 31px;
  padding-top: 10px;
  padding-left: 80px;
  padding-bottom: 10px;
`;

const NavItems = styled.div`
  display: flex;
`;

const NavItem = styled.a`
  ${({ theme }) => theme.fonts.roboto_medium};
  padding-top: 10px;
  padding-bottom: 10px;
  margin-left: -40px;
  margin-right: 70px;
  color: #333;
  text-decoration: none;
  font-weight: 700;
  &:hover {
    color: ${({ theme }) => theme.colors.pc1};
  }
`;
