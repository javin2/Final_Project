import React, { Fragment } from "react";
import styled from "styled-components";
import "font-awesome/css/font-awesome.min.css";

const Wrapper = styled.nav`
  width: 100%;
  height: 65px;
  line-height: 65px;
  background-color: black;
  color: white;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
`;
const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: "Gotham", "Helvetica", "Arial", sans-serif;
`;

const Left = styled.div`
  flex-basis: auto;
  align-self: flex-start !important;
  margin-left: 15px;
`;
const Center = styled.div`
  align-self: flex-start !important;
  margin-right: 170px;
  a {
    color: #fff;
    text-decoration: none;
    cursor: pointer;
    margin-right: 35px;
  }
`;
const Right = styled.div`
  align-self: flex-end !important;
  margin-right: 60px;
  a {
    color: #fff;
    text-decoration: none;
    cursor: pointer;
  }

  span {
    //float: block;
    margin: 22px 15px;
    height: 20px;
    border-left: 1px solid #fafafb;
  }
`;
const Menu = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  list-style-type: none;
  font-size: 0.75em;
  font-weight: bold;
`;

const Logo = styled.span`
  font-family: "Poppins-ExtraBold";
  font-weight: bold;
  font-size: 18px;
  a {
    color: #fff;
    text-decoration: none;
  }
`;
const Btn = styled.div`
  i {
    line-height: 0px;
    margin-right: 8px;
  }
  a {
    color: white;
    border-radius: 7px;
    padding: 10px 25px;
    cursor: pointer;
    border-radius: 7px;
    border: 1px solid white;
    text-align: center;
    line-height: 20px;
    text-decoration: none;
  }
`;
const Navbar = () => {
  return (
    <Wrapper>
      <Nav>
        <Left>
          <Logo>
            <a to="/">WeDEVELOP</a>
          </Logo>
        </Left>
        <Center>
          <Menu>
            <Fragment>
              <li>
                <a to="/">FIND A JOB</a>
              </li>
              <li>
                <a to="/">CREATE A PROFILE</a>
              </li>
              <li>
                <a to="/">GET PAID</a>
              </li>
            </Fragment>
          </Menu>
        </Center>
        <Right>
          <Menu>
            <Fragment>
              <li>
                <a to="/register">SIGN UP</a>
              </li>
              <span></span>
              <li style={{ marginRight: "30px" }}>
                <a to="/login">LOGIN</a>
              </li>
              <li>
                <Btn>
                  <a to="/login">
                    <i className="fa fa-lg fa-suitcase"></i>POST A JOB
                  </a>
                </Btn>
              </li>
            </Fragment>
          </Menu>
        </Right>
      </Nav>
    </Wrapper>
  );
};
export default Navbar;
