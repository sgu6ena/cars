import  React from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;

    cursor: pointer;
    display: block;
    
    padding: 7px 22px 6px;
    margin: 24px auto 18px;
    min-width: 160px;
    
    color: #FFFFFF;
    background: ${props => props.color || '#FFB800'};
    border-radius: 4px;
    border: 1px solid ${props => props.color || '#FFB800'};

    transition: all 0.3s;
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.05);
    
    &:hover {
        transition: all 0.3s;
        border: 1px solid #0258FF;
        background: #0258FF;
        color: #ffffff;
    }

    &:active {
        transition: all 0.1s;
        border: 1px solid #FFB800;
        background: #FFB800;
        color: #ffffff;
    }

`

const Button = ({text, ...props }: { text: string, color?: string }) => {
    return (
        <ButtonStyled  {...props}> {text}   </ButtonStyled>
    );
};


export default Button;