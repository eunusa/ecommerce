import { Add, Remove } from '@mui/icons-material';
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'


const Container = styled.div``;
const Wrapper = styled.div`
    padding: 20px;

`;
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;
const Top = styled.h1`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px;

`;
const TopButton = styled.button`
    padding : 10px;
    font-weight: 600;
    cursor: pointer;
    font-size: 20PX;
    border: ${props=>props.type === "filled"&&"none"};
    background-color: ${props=>props.type === "filled"?"black ":"transparent"};
    color: ${props=>props.type === "filled"&&"white"};

`;
const Buttom = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Info = styled.div`
    flex: 3;
`;
const Summary = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    
    height: 50vh;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;

`;

const TopsTexts = styled.div`

`;
const TopText = styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0px 10px;
font-size: 20px;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-around;
`;
const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`;

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const ProductName = styled.span`

`;
const ProductID = styled.span`

`;
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
`;
const ProductSize = styled.span`

`;
const PriceDetail = styled.span`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Image = styled.img`
width: 200px;


`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
`;

const Productmount = styled.div`
    margin: 10px;
    font-size: 25px;
`;

const ProductPrice = styled.span`

    font-size: 30px;
`;

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`;

const SummaryItemText = styled.span`


`;
const SummaryItemPirce = styled.span`

`;
const SummaryItem = styled.div`
display: flex;
margin: 30px 0px;
justify-content: space-between;
font-weight: ${props=>props.type==="total" &&"500"};
font-size: ${props=>props.type==="total" &&"24px"};
`;
const SummaryTitle = styled.h1``;
const Button = styled.button`
width: 100%;
padding: 10px;
background-color:black;
color: white;
`;


const Cart = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>CONTINUEW SHOPPING</TopButton>
                <TopsTexts>
                    <TopText>Shopping Bac(2)</TopText>
                    <TopText>Your Wishlist</TopText>
                    
                </TopsTexts>
                <TopButton type="filled">CHECKOUT NOW</TopButton>
            </Top>
            <Buttom>
                <Info>
                    <Product>
                        <ProductDetail>
                        <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                        <Details>
                            <ProductName><b>Product:</b>JESSIE THUNDER SHOES</ProductName>
                            <ProductID><b>ID:</b>9381371893</ProductID>
                            <ProductColor color="black" />
                            <ProductSize><b>Size:</b>37.5</ProductSize>
                        </Details>
                        </ProductDetail>
                        <PriceDetail> {/* pricedeail을 product안에 안넣었을까? */}
                            <ProductAmountContainer>
                                <Add />
                                <Productmount>2</Productmount>
                                <Remove />
                            </ProductAmountContainer>
                            <ProductPrice>$ 30</ProductPrice>
                        </PriceDetail>
                    </Product>
                    <Hr />
                    <Product>
                        <ProductDetail>
                        <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                        <Details>
                            <ProductName><b>Product:</b>JESSIE THUNDER SHOES</ProductName>
                            <ProductID><b>ID:</b>9381371893</ProductID>
                            <ProductColor color="gray" />
                            <ProductSize><b>Size:</b>37.5</ProductSize>
                        </Details>
                        </ProductDetail>
                        <PriceDetail> {/* pricedeail을 product안에 안넣었을까? */}
                            <ProductAmountContainer>
                                <Add />
                                <Productmount>2</Productmount>
                                <Remove />
                            </ProductAmountContainer>
                            <ProductPrice>$ 30</ProductPrice>
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPirce>$80</SummaryItemPirce>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPirce>$5.90</SummaryItemPirce>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPirce>$ -5.90</SummaryItemPirce>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText >Total</SummaryItemText>
                        <SummaryItemPirce>$80</SummaryItemPirce>
                    </SummaryItem>
                    <Button>CHECKOUT NOW</Button>
                </Summary>

            </Buttom>
        </Wrapper>
        <Footer />
    </Container>

  )
}

export default Cart