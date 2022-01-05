import React from "react";
import styled from "styled-components";


const Title = styled.h3`
margin:15px 0 8px ;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 19px;
color: #000000;
`
const Value = styled.p`
margin:8px 0;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 16px;
color: #828282;
`
const PropertyInfo = ({title, value}: { title: string, value: string }) => {
    return (
        <div>
            <Title>{title}</Title>
            <Value>{value}</Value>
        </div>
    );
};


export default PropertyInfo;