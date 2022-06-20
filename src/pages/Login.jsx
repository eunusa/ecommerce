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
    width: 20%;
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
    justify-content: center;
    flex-direction: column;
    align-items: center;
    `;
const Input = styled.input`
    flex:1;
    min-width: 95%;
    margin: 10px;
    padding: 10px;
    font-size: 20px;
`;

const Button = styled.button`
    font-size:24px ;
    cursor: pointer;
    background-color: teal;
    color: white;
    padding: 10px 50px;
    border: none;
    margin: 30px;
    
   
`;

const Link = styled.a`
    font-size: 15px;
    margin: 5px;
    text-decoration: underline;
    cursor: pointer;
`;
    


const Login = () => {
  return (
    <MainContainer>
        <Navbar/>
    <Container>
          <Wrapper>
              <Title>SIGN IN</Title>
              <Form>
                  <Input placeholder="username" />
                  <Input placeholder="password" />
                  <Button>LOGIN</Button>
                  <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
                  <Link>CREATE A NEW ACCOUNT</Link>
              </Form>
              
          </Wrapper>
      </Container>
    </MainContainer>
  )
}

export default Login