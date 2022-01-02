import React, {useEffect, useState} from "react";
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

const InputGroup = styled.div`
    margin: 8px 0;
    padding:0;
    display: flex;
    align-items: center;
    width: 100%;
    background: #FFFFFF;
    border: 1px solid #E0E0E0;
    border-radius: 4px;
    font-weight: normal;
    font-size: 16px;
    color: black;
    
    & button{
        font-weight: 300;
        font-size: 20px;
        color:lightgray;
        padding:0px;
        margin:0;
        min-width:30px;
        width: 30px;
        height: 30px;
        background: transparent;
        border: none;
        outline: none;
        box-shadow:none;
        aspect-ratio: 1/1;
    }
    
    & input{
        width:100%;
        margin:0;
        border:0;
        padding: 7px 16px 6px;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
            
        &::placeholder {
            color: #E0E0E0;
        }
        
        &:focus{
            outline: none;
        }
    }
    
`
const Password = (props: { placeholder: string, label: string }) => {

    const [preview, setPreview] = useState(true);
    useEffect(() => {
        }
        , [preview]);
    return (
            <StyledLabel> {props.label}
                <InputGroup>
                    <input type={preview ? 'password' : 'text'} className={'password'} placeholder={props.placeholder}/>
                    <button onClick={() => setPreview(!preview)}>
                        <i className={preview ? ' fa fa-eye-slash' : 'fa fa-eye'}/>
                    </button>
                </InputGroup>
            </StyledLabel>

    );
}

export default Password;