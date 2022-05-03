import styled from "styled-components"

export const Ul = styled.ul`
display: flex;
flex-direction: row;
list-style-type: none;
justify-content: space-around;
padding: 5px;
background-color: white;
margin: 0 auto;
border-radius: 0 0 15px 15px;
max-width: 1000px;
`

export const Li = styled.li`
 text-align: center;
 width: 100px;
 padding:5px;
 &:hover{
     background-color: rgb(236, 168, 108);
     border-radius: 15px;
 }
`
