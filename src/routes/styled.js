import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin: 15px 10px 0 10px;
    padding: 10px;
    align-items: center;
    font-size: 24px;
`
export const Div = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 30px;
`

export const Img = styled.img`
    border-radius: 15px;
    opacity: 0.5;
    box-shadow: 0 0 15px 15px rgb(236, 168, 108);
`

export const Label = styled.label`
padding: 0;
line-height: 0;
display: flex;
align-items: center;
gap: 5px;
`

export const Input = styled.input`
    border-radius: 8px;
    border: 1px solid;
    padding: 5px;
    font-size: 16px;
    text-align: center;
    border-radius: 8px;
    border: 0;
    width: 250px;
`

export const Button = styled.button`
    background-color: black;
    color: rgb(236, 168, 108);
    font-size: 24px;
    padding-left: 10px;
    padding-right: 10px;
`