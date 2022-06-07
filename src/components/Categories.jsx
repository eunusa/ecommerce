import  styled  from "styled-components"
import { categories,popularProducts  } from "../data"
import CategoryItem from "./CategoryItem"

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
`;



const Categories = () => {
  return (
    <Container>
        {categories.map(item=>(
            <CategoryItem item={item} key={item.id}/> //item을 props로 item에 넘겨준거
            
        ))}
    </Container>

  )
}

export default Categories