import { Facebook } from '@mui/icons-material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import PhoneIcon from '@mui/icons-material/Phone';
import MapIcon from '@mui/icons-material/Map';
import EmailIcon from '@mui/icons-material/Email';
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
height: 30vh;
background-color: #958978;

`;
const Left = styled.div`
flex:1;
display: flex;
flex-direction: column;
padding: 20px;

`;
const Center = styled.div`
flex:1;
padding: 20px;

`;
const Right = styled.div`
flex:1;
padding: 20px;
 
`;

const Title = styled.h3`
 margin-bottom: 30px;
`
const List = styled.ul`
  margin:0;
  padding:0;
  list-style: none;
  display: flex;
  flex-wrap: wrap; //자동 줄바꿈

`
const ListItem = styled.li`
  width: 50%; //2행으로 자동 정렬됨
  margin-bottom: 10px;
`

const Desc = styled.p`
margin: 20px 0px;
`;

const Logo = styled.h1`

`;
const SocialContainer = styled.div`
display: flex;
`;
const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color:white;
cursor: pointer;
background-color: #${props=>props.color};
justify-content: center;
align-items: center;
display: flex;
margin-left: 5px;
`;

const ContactItem = styled.div`
display: flex;
margin-bottom: 10px;
align-items: center;
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>LAMA.</Logo>
            <Desc>  There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
          </Desc>
          <SocialContainer>
            <SocialIcon color="3b5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="e4405f">
            <InstagramIcon />
          </SocialIcon >
          <SocialIcon color="55acee">
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon color="e60023">
            <PinterestIcon />
            </SocialIcon>
          </SocialContainer>

        </Left>
        <Center>

          <Title>Useful Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>

          </List>
        </Center>
        <Right>

          <Title>Contact</Title>
          <ContactItem>
            <MapIcon style={{marginRight:"5px"}}/>622 Dixie Path, South Korea 144
          </ContactItem>
          <ContactItem>
           <PhoneIcon style={{marginRight:"5px"}}/> +82 010 9330 4068
          </ContactItem>
          <ContactItem>
            <EmailIcon style={{marginRight:"5px"}}/>contact@gmail.com
          </ContactItem>
        </Right>
    </Container>
  )
}

export default Footer