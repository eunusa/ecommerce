import { Add, Remove } from "@mui/icons-material"
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import { mobile } from "../responsive"


const Container = styled.div``;
const Wrapper = styled.div`
    display: flex;
    padding: 50px;
    ${mobile({padding:"5px",flexDirection:"column"})};
    
`;
const ImgContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;

`;
const Image = styled.img`
    object-fit: cover;
    height: 70vh;
    ${mobile({height:"50vh"})};
    
`;
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`;
const Title = styled.h1`
    ${mobile({marginTop:"10px"})};

`;
const Dsec = styled.p`
    font-size:20px;
    margin: 20px 0px;

`;

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`;

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
`;
const Filter = styled.div`
    display: flex;
    align-items: center;
`;
const FilterTitle = styled.span`
    font-weight: 200;
    font-size: 20px;


`;
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius:50% ;
    background-color: ${props=>props.color};
    margin: 0px 5px;
    cursor: pointer;
`;
const FilterSize = styled.select`
    margin: 0 5px;
    padding: 5px;
`;
const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
    display: flex;
    width: 50%;
    align-items: center;
    justify-content: space-between;
    ${mobile({justifyContent:"center",flexDirection:"column",width:"100%"})};
    
`;

const Amountcontainer = styled.div`
    align-items: center;
    display: flex;
    font-weight: 700;
`;

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    align-items: center;
    display: flex;
    justify-content: center;
    margin: 0px 5px;
`;

const Button = styled.button`

    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: #dfdfdf;
    }
    ${mobile({padding:"15px 50px",margin:"20px 0px"})};

`;


const Product = () => {
  return (
    <Container>
        <Announcement/>
        <Navbar />
            <Wrapper>
                <ImgContainer>
                <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
                </ImgContainer>
                <InfoContainer>
                    <Title>Denim Jumpsuit</Title>
                    <Dsec>Super Deal! Free Shopping on Orders Over </Dsec>
                    <Price>$ 20</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color ="black"/>
                            <FilterColor color ="darkblue"/>
                            <FilterColor color ="gray"/>
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                                <FilterSizeOption>XS</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>

                        <Amountcontainer>
                            <Remove />
                            <Amount>1</Amount>
                            <Add/>
                        </Amountcontainer>
                        <Button>Add Cart</Button>
                    </AddContainer>

                </InfoContainer>
            </Wrapper>
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default Product