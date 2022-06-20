import styled from "styled-components"
import Navbar from "../components/Navbar"



const MainContainer = styled.div`
    
`

const Container = styled.div`
    width: 100vw;
    height: 70vh;    
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: rgb(234, 255, 221);
;

`
const Title = styled.h1`

    font-size: 24px;
    font-weight: 300;
`;
const Form = styled.form`
    display:flex;
    flex-wrap:wrap; //자동줄바꿈
    justify-content: center;
    align-items: center;
    `;
const Input = styled.input`
    flex:1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
    font-size: 20px;
`;
const Agreement = styled.span`
    margin: 10px 0;
`;
const Button = styled.button`
    font-size:24px ;
    cursor: pointer;
    background-color: teal;
    color: white;
    padding: 10px;
    border: none;
`;
    


const Register = () => {
  return (
    <MainContainer>
        <Navbar/>
    <Container>
          <Wrapper>
              <Title>CREATE AN ACCOUNT</Title>
              <Form>
                  <Input placeholder="name" />
                  <Input placeholder="last name" />
                  <Input placeholder="username" />
                  <Input placeholder="email" />
                  <Input placeholder="password" />
                  <Input placeholder="confirm password" />
                  <Agreement>
                      By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
                  </Agreement>
                  <Button>CREATE</Button>
              </Form>
          </Wrapper>
      </Container>
    </MainContainer>
  )
}

export default Register