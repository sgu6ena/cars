import  React from "react";
import styled from "styled-components";

const DialogStyled = styled.div`
    width: 350px;
    padding: 20px 16px;
    color: black;
    background: #FFFFFF;
    box-shadow: 0px 20px 20px rgba(40, 40, 40, 0.05);
    border-radius: 10px;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    color: #828282;
`

const Dialog = (props:any) => {
    return (
        <DialogStyled>{props.children}</DialogStyled>
    );
};


export default Dialog