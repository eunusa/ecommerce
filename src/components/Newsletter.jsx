
import React from 'react'
import styled from 'styled-components'
import SendIcon from '@mui/icons-material/Send';


const Container = styled.div`

background-color: antiquewhite;
height: 60vh;// vh 스크린 크기에 맞춰 상대적으로 크기를 반환함
justify-content: center; //
align-items: center;
display: flex;
flex-direction: column;
`
const Title = styled.h1`
font-size: 40px;

`
const Desc = styled.div`
font-size: 30px;


`

const InputContainer = styled.div`
justify-content: space-between; //

display: flex;
margin: 20px 0;
height: 50px;
width: 30%;
border: solid 1px lightgray;
background-color: white;
`

const Input = styled.input`
border: none;
flex: 8;
font-size: 20px;
padding-left: 20px;
`

const Button = styled.button`
flex: 1;
cursor: pointer;
border: none;
background-color: teal;
color: white;

`

const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Get timely updates from your faborite product</Desc>
        <InputContainer>
            <Input placeholder='Your email' />
            <Button>
                <SendIcon />
            </Button>
        </InputContainer>
    </Container>


  )
}

export default Newsletter