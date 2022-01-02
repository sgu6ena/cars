import  React from "react";
import styled from "styled-components";

const StyledLabel = styled.label`
    padding-top: 8px;
    display: block;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    color: #828282;
`

const Input = styled.input `
    display: block;
    width: 100%;
    background: #FFFFFF;
    border: 1px solid #E0E0E0;
    box-sizing: border-box;
    border-radius: 4px;
    margin: 8px 0;
    padding: 7px 16px 6px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: black;

    &::placeholder {
        color: #E0E0E0;
    }
    
    &:focus {
        outline: 1px solid #0258FF;
    }
`

const textInput = ({label, placeholder}: { label: string, placeholder:string }) => {
    return (
        <StyledLabel>{label}
            <Input type="text" placeholder={placeholder}/>
        </StyledLabel>
    );
};


export default textInput;