import React from "react";
import styled from "styled-components";

const ImageStyled = styled.img`
margin:10px 0 ;
border-radius:0px;
`
const Image = ({alt, src}:{alt:string, src:string}) => {
    return (
        <ImageStyled src={src} alt={alt} width={350} height={190}/>
    );
};

export default Image;