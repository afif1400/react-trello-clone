import styled from 'styled-components';

const Nav = styled.nav`
  background: #026aa7;
  padding: 4px;
  margin-bottom: 20px;
`;

const NavItems = styled.div`
  display: inline-block;
  margin-right: 10px;
  a {
    display: inline-block;
  }
`;

const NavUser = styled.div`
  position: absolute;
  right: 0;
  top: 4px;
  div {
    display: inline-block;
  }
`;

export { Nav, NavItems, NavUser };