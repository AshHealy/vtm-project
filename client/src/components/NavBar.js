import React from "react";
import { Link } from "react-router-dom"
import styled from 'styled-components'

const StyledNav = styled.ul`
display:flex;
justify-content: space-evenly;
list-style-type: none;
background-color: #F1FFFA;
margin:0;
padding:1em;
font-family: 'Courier New', Courier, monospace;
font-size: large;
text-decoration: none;
color: black;
`

const StyledNavItem = styled.li`
  margin-right: 10px;
  cursor: pointer;

`

const NavbarLink = styled(Link)`
  text-decoration: none;
  color: black;

  &:visited {
    color: red;
  }
`;




const NavBar = () => {

    return (

        <StyledNav>
            <StyledNavItem><NavbarLink to="/">Home</NavbarLink></StyledNavItem>
            <StyledNavItem><NavbarLink to="/characters">Characters</NavbarLink></StyledNavItem>
            <StyledNavItem><NavbarLink to="/charactercreation">Character Creation</NavbarLink></StyledNavItem>
        
        </StyledNav>

    )
}

export default NavBar;