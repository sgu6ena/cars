import React from "react";
import styled from "styled-components";

// @ts-ignore
const ErrorMessageStyled = styled.div`


`

const ErrorMessage = () => {
    return (
        <ErrorMessageStyled >
          К сожадению, произошла какая-то ошибка
        </ErrorMessageStyled>
    );
};

export default ErrorMessage;