
import styled from 'styled-components'
import { popularProducts, categories } from "../data"
import Product from "./Product"

const Container = styled.div`
display: flex;
padding: 20px;
flex-wrap: wrap; //가능한 영역내에 여러행으로 나누어 표현한다.
justify-content: space-between;
`;


const Products = () => {
  return (
    <Container>
        {popularProducts.map(item=>(
            <Product item={item} key={item.id} />
        ))}
    </Container>

  )
}

export default Products