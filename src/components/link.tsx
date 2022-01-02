import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled.div`
& a{
    display: block;
    text-align: center;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    text-decoration-line: underline;
    color: #0258FF;
    transition: all 0.3s;

    &:hover{
        transition: all 0.3s;
        color: #FFB800;
    }
}

`

const link = ({text, to}: { text: string, to: string }) => {
    return (
        <StyledLink>
            <Link to={to}>{text}</Link>
        </StyledLink>
    );
}

export default link;