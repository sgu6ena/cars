import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import styled from "styled-components";
import Api from "../services/api"

import Image from "./image";
import Flex from "./flex"
import Link from "./link";
import PropertyInfo from "./property-info"
import Button from "./button";
import Spinner from "./spinner"
import ErrorBoundary from "./error-boundary";
import ErrorMessage from "./ErrorMessage";

const ItemCardStyled = styled.div`
    max-width:1100px;
    margin:auto;
    width:90vw;
    height:80vh;

    color:black;
    background: white;
    padding: 25px 95px;   
    display: block;
    border-radius: 10px;
    box-shadow: 0px 20px 20px rgba(40, 40, 40, 0.05);
`

const Info = styled.div`
    margin:0 30px;
    
    h2{
        font-size: 24px;
        line-height: 28px;
    }
    
    p{
        font-size: 16px;
        line-height: 19px;
        color: #828282;
    }
`

const ItemCard = ({}) => {
    const params = useParams();
    const api = new Api();

    const [appState, setAppState] = useState({
        loading: true,
        repos: {
            title: '',
            year: '',
            text: ''
        }
    });

    useEffect(() => {

        api.getCar(params.id)
            .then(car => setAppState({loading: false, repos: car}))
            // @ts-ignore
            .catch(()=>setAppState({loading: false, repos: null }));
    }, [setAppState]);

    const data = appState.loading ? null : (
        <>
            <Flex>
                <Image src='http://placeimg.com/640/480/transport' alt={appState.repos.title}/>
                <Info>
                    <h2>{appState.repos.title}</h2>
                    <p>{appState.repos.text} </p>
                </Info>
            </Flex>
            <PropertyInfo title={'Год выпуска'} value={appState.repos.year.toString()}/>
            <PropertyInfo title={'Тип топлива'} value={'бензин'}/>
            <Button text={"Беру!!!"}/>
        </>
    )

    const loading = appState.loading ? <Spinner /> : null;
    const error = !appState.loading && !appState.repos ? <ErrorMessage /> : null;

    return (
        <ItemCardStyled>
            <Link to='/items' text={'Вернуться'}/>
            <hr/>
            <ErrorBoundary>
                {data}
                {loading}
                {error}
            </ErrorBoundary>

        </ItemCardStyled>
    );
};

export default ItemCard