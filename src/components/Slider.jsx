import styled from 'styled-components'
import React from 'react'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import { sliderItems } from '../data';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: #f7a582;
    position: relative; //postion 공부하기
    overflow: hidden; // 넘치는부분을 보여주지 않는다.
`;
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #f1f1f1;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    justify-content: center; //가로 중심축
    align-items: center;
    position: absolute;
    top: 0;// top 0 bottom 0 margin auto 정중앙 위치
    left: ${props=> props.direction === "left" && "10px"}; //props로 direction 값이 left가 존재할 경우 10px 출력
    //left: ${props=> props.direction || "10px"}; //props로 direction 값이 없을 경우 10px 출력
    right: ${props=> props.direction === "right" && "10px"}; // === 데이터 타입 비교 연산자 
    bottom: 0;
    margin: auto;//세로정렬시 필요하다.
    opacity: 0.5;
    z-index: 2; //쌓이는 순서
    
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(0vw); //좌우로 이동
`;

const Slide = styled.div`
    width: 100vw; //vw vh % 차이는 스크롤 유무의 차이
    height: 100vh;
    display: flex;
    align-items: center; //세로 중심축
    background-color: #${props=>props.bg};

`;
const ImgContainer = styled.div`
height: 100%;
flex:1;
`;

const Image = styled.img`
    height: 80%;
`;


const InfoContainer = styled.div`
    flex:1;
    padding: 50px;
`;

const Title = styled.h1`
    font-size: 70px;
`;
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing:  3px;
`;
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent; // transparent 투명
    cursor: pointer;
`;

const Slider = () => {

    const [slideIndex, setslideIndex] = useState(0);
    const handleClick = (direction) =>{};

        if(direction==="left"){
            setslideIndex(slideIndex > 0 ? slideIndex -1 : 2 );
        } else{setslideIndex(slideIndex < 2 ? slideIndex + 1 : 0 );
        };

        
  return (
        <Container>
            <Arrow direction="left" onClick={()=>handleClick("left")}>
                 <ArrowLeftOutlined/>   
            </Arrow>
            <Wrapper slideIndex={slideIndex}>

                {sliderItems.map(item=>{

                <Slide bg={item.bg}>
                    
                <ImgContainer>
                    <Image src={item.Image} /> {/* 이미지파일은 public 폴더에 넣는다. */}
                </ImgContainer>
                <InfoContainer>
                    <Title>{item.Title}</Title>
                    <Desc>{item.desc}</Desc>
                    <Button>SHOW NOW</Button>
                </InfoContainer>
                </Slide>
                })};
           
            </Wrapper> 
            <Arrow direction="right" onClick={()=>handleClick("right")}>
                 <ArrowRightOutlined/>   
            </Arrow>
        </Container>
    )
}

export default Slider