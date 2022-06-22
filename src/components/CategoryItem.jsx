import  styled  from "styled-components" //라이브러리는 소문자.
import { mobile } from "../responsive"

const Container = styled.div`
flex: 1;
margin: 3px;
position: relative;

`

const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
   /*  background-color: yellow; 글자 배치할때 배경 깔아서 보면 편한다.*/
    display: flex; //가로배치
    flex-direction: column;
    align-items: center;
    justify-content: center;

`
const Image = styled.img` //div로 넣으면 이미지 안나옴, img 로 처리
width: 100%;
height: 100%;
object-fit: cover; // img video object svg 일정크기로 재가공한다.
${mobile({height:"30vh"})}

`
const Title = styled.h1`
    color:white;
    margin: 20px;
`
const Button = styled.button`
padding: 10px;
border: none;
background-color: white;
color: gray;
cursor: pointer;
font-size: 15px;
font-weight: 500;
`


const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
    </Container>
  )
}

export default CategoryItem