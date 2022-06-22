import React from 'react'
import styled from 'styled-components'
import { Search, ShoppingBagOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import { mobile } from '../responsive';

const Container = styled.div`
    height : 60px;
    ${mobile({height:"50px"})}
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    ${mobile({padding: "10px 0px"})}
`
const Left = styled.div`
    flex:1;
    display: flex; //가로배치 width만큼 차지한다.
    align-items: center;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({display:"none"})}
    
`

const Center = styled.div`
    flex:1;
    display: flex;
    justify-content: center;

`
const Right = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({justifyContent:"center"})}
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    
    margin-left: 25px;
    padding: 5px;
`

const Input = styled.input`
    border:none;
    ${mobile({width:"50px"})}
    
`

const Logo = styled.h1`
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    ${mobile({fontSize:"24px"})}
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({fontSize:"10px",marginLeft:"10px"})}
    
`
const ShoppingBagOutlinedCss = {marginLeft: "10px", cursor: "pointer"}; //-는 붙이고 대문자로 고친다.


const searchstyle = {color:"grey", fontSize:"16px"};

const Navbar = () => {
  return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>En</Language>
                    <SearchContainer>
                        <Input placeholder="Search" />
                        <Search style={searchstyle}/>
                    </SearchContainer>
                </Left>

                <Center><Logo>MAST</Logo></Center> 
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingBagOutlined style={ShoppingBagOutlinedCss}/>
                    </Badge>
                </Right>
            </Wrapper>
        </Container>
  )
}

export default Navbar