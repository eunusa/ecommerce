import React from 'react'
import styled from 'styled-components'
import { Search, ShoppingBagOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';

const Container = styled.div`
    height : 60px;
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`
const Left = styled.div`
    flex:1;
    display: flex; //가로배치 width만큼 차지한다.
    align-items: center;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    
`

const Center = styled.div`
    flex:1;
    
`
const Right = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    
    margin-left: 25px;
    padding: 5px;
`

const Input = styled.input`
    border:none;
`

const Logo = styled.h1`
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
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
                        <Input/>
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