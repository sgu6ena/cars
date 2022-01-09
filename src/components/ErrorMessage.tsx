import React from "react";
import styled from "styled-components";

// @ts-ignore
const ErrorMessageStyled = styled.div`
i{
color: orange;
font-size:120px;
}
    padding:40px 20px 20px ;
    border-radius:10px;
    background: white;
    color:black;
    text-align: center;
    width:300px;
`

const ErrorMessage = () => {
    return (
        <ErrorMessageStyled>
            <i className="fas fa-exclamation-triangle"></i>
            <h1>404</h1>
        </ErrorMessageStyled>
    );
};

export default ErrorMessage;