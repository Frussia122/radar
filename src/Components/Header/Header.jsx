import styled from 'styled-components';
import logo from './logo.svg';



const Wrapper = styled.header`
    background-color: white;
    border-radius: 32px;
    margin: 32px;
    padding: 32px 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 768px) {
      margin: 8px;
      padding:16px 24px;
      margin-bottom: 32px;
    }


    @media (max-width: 600px) {
      
    }
`;
const Logo = styled.img`
 
`;

const Nav = styled.nav`
`;

const NavList = styled.ul`
    display: flex;
`;

const NavItem = styled.li`
    margin-left: 32px;
    cursor: pointer;
    font-family: 'Inter', sans-serif;
    transition: all .2s linear;
    font-weight: 500;
    &:hover{
       color:gray;
    }
    @media(max-width: 535px) {
        margin-right: 0px;
    }

    @media (max-width: 440px) {
      font-size: 14px;
    }
`;

function Header() {
  return (
    <Wrapper>
      <Logo alt="logo" src={logo}/>
      <Nav>
        <NavList>
          <NavItem>
            <a href="#works">Портфолио</a>
          </NavItem>
          <NavItem>
            <a href="#feedbacks">Отзывы</a>
          </NavItem>
          <NavItem>
            <a href="#communication">Связаться</a>
          </NavItem>

        </NavList>
      </Nav>
    </Wrapper>
  );
}

export default Header;