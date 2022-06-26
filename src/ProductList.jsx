import styled from "styled-components"
import { popularProducts } from "../data"
import Product from "../components/Product"
import { mobile } from "../responsive"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"



const Container = styled.div`
  margin: 10px;
  ${mobile({width:"100%"})}
`;
const FilterContainer = styled.div`

  margin: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


const Filter = styled.div`
  display: flex;
  margin: 15px 0px;
  align-items: center;
`;
  
const FilterSize = styled.select`
  padding: 5px;
  font-size: 17px;
  margin-left: 5px;
`;

const FilterSizeOption = styled.option`
`;

const FilterTitle = styled.span`
font-size: 20px;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props=>props.color};
  margin-left: 5px;
`;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
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
    {popularProducts.map(item=>(
        <Product item={item} key={item.id} />
    ))}
      <Newsletter />
      <Footer />
  </Container>
  )
}

export default ProductList