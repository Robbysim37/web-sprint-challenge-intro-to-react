// Write your Character component here
import React from "react"
import styled from "styled-components"

const CharacterStyles = styled.div`
color: white;
border: 1px solid green;
font-size: 3rem;
width:80vw;
display:flex;
justify-content: space-between;
${props => props.id !== 0 ? `margin-top: 1rem;` : null}
${props => props.id !== props.arrCount - 1 ? `margin-bottom: 1rem;` : null}
`

const TextStyles = styled.div`
margin: .5rem;
`

const Character = (props) => {
return(
<CharacterStyles arrCount={props.arrCount} id={props.id}>
    <TextStyles>{props.characterObj.name}</TextStyles>
    <TextStyles>{props.characterObj.birth_year}</TextStyles>
</CharacterStyles>
)
}

export default Character