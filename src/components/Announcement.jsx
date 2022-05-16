import styledComponents from "styled-components"
import styled from "styled-components"


const Container = styled.div`
    height: 30px;
    background-color: teal;
    display: flex;
    justify-content: center; 
    align-items: center;
`

const DealText = styled.span`
    color: white;
    
`


export const Announcement = () => {
  return (
    <Container><DealText>Super Deal! Free Shopping on Orders Over $50</DealText></Container>
  )
}

export default Announcement