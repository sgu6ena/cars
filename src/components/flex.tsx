import React from "react";
import styled from "styled-components";

// @ts-ignore
const FlexStyled = styled.div`display:flex;flex-direction: ${props => props.direction || 'row'};justify-content: ${props => props.justify || 'stretch'};align-items: ${props => props.align || 'stretch'};

`

const Flex = ({children,...props}: { direction?: string, justify?: string, align?: string, children:  JSX.Element|JSX.Element[] }) => {
    return (
        <FlexStyled {...props} >
            {children}
        </FlexStyled>
    );
};

export default Flex;