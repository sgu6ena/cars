import  React from "react";
import styled from "styled-components";

const TitleStyled = styled.h1`
text-align: center;
font-style: normal;
font-weight: 300;
font-size: 22px;
line-height: 26px;
margin-bottom: 50px;
`

const Title = ({title}: { title: string }) => {
    return (
        <TitleStyled>{title}</TitleStyled>
    );
};


export default Title;