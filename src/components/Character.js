// Write your Character component here
import React from "react"
import styled from "styled-components"

const CharacterStyles = styled.div`
border: 1px solid green;
font-family: 'Black Ops One', cursive;
width:60vw;
display:flex;
justify-content: space-between;
${props => props.id !== 0 ? `margin-top: 1rem;` : null}
${props => props.id !== props.arrCount - 1 ? `margin-bottom: 1rem;` : null}
`

const BirthYearBackground = styled.div`
background-color: dimgray;
border-bottom-left-radius: 25px;
border-bottom-right-radius: 10px;
border-top-left-radius: 10px;
border-top-right-radius: 25px;
margin: 1rem;
letter-spacing: 4px;
display: flex;
align-items: center;
`

const TextStyles = styled.div`
margin: .5rem;
${props => props.type === "name" ? `font-size: 3rem;` : null}
${props => props.type === "name" ? `color: white;` : null}
${props => props.type === "year" ? `font-size: 1rem;` : null}
${props => props.type === "year" ? `color: darkslateblue;` : null}
`

const Character = (props) => {
return(
<CharacterStyles arrCount={props.arrCount} id={props.id}>
    <TextStyles type="name">{props.characterObj.name}</TextStyles>
    <BirthYearBackground>
        <TextStyles type="year">{props.characterObj.birth_year}</TextStyles>
    </BirthYearBackground>
</CharacterStyles>
)
}

export default Character