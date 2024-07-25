import React from 'react';
import styled from 'styled-components';

function Nav() {
  return (
    <Navbar>
      <Logo>Aehopark</Logo>
      <NavItems>
        <NavItem1>이용정보</NavItem1>
        <NavItem>문의하기</NavItem>
      </NavItems>
    </Navbar>
  );
};

export default Nav;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  
`;

const Logo = styled.div`
  ${({ theme }) => theme.fonts.sansita_one};
  font-size: 25px;
  color: ${({ theme }) => theme.colors.pc1};
 
  width:164.94px;
  height:30.53px;
  padding-top:23px;
  padding-left:94px;
  padding-bottom:18.47px;
`;


const NavItems = styled.div`
  display: flex;
`;

const NavItem1 = styled.a`
  margin-left: 20px;
  margin-right:41 px;
  color: #333;
  text-decoration: none;
  font-weight: bold;
  
  &:hover {
    color: #4CAF50;
  }
`;

const NavItem = styled.a`
  margin-left: 20px;
  margin-right: 122px;
  color: #333;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    color: #4CAF50;
  }
`;