import styled from "styled-components";
import React, {useEffect, useState} from "react";
import Button from "./button";
import Link from "./link";
import Flex from "./flex";
import Api from "../services/api"
import Spinner from "./spinner"

const ItemListStyled = styled.div`
    max-width:1100px;
    margin:40px auto;
    color:black;
    background: white;
    width:90vw;
    min-height:80vh;
    padding: 25px 95px;   
    display: block;
    border-radius: 10px;
    box-shadow: 0px 20px 20px rgba(40, 40, 40, 0.05);

    h2{
    text-align: center;
     color: #828282;
    }

    table {
        font-size: 14px;
        line-height: 16px;
        width:100%;
    }
    
    th  {
        font-style: normal;
        font-weight: normal;
        text-align:left;
        font-size: 16px;
        line-height: 19px;
        color: #828282;
        opacity: 0.8;
    }
    
    td, th{
    margin:0;
    padding:15px 0;
        border-bottom:1px solid lightgray;
    }
`

const ItemList = () => {
    const api = new Api();

    const [appState, setAppState] = useState({
        loading: true,
        repos: []
    });

    useEffect(() => {
        api.getAllCars()
            .then(res => {
                    setAppState({loading: false, repos: res});
                }
            );
    }, [setAppState]);


    const Rows = () => (
        <> {
            appState.repos
                .map((car: any) => {
                        return (
                            <tr key={car.id}>
                                <td><Link text={car.title} to={`/items/${car.id}`}/></td>
                                <td>{car.price}</td>
                                <td>01.01.22</td>
                                <td><Link text={'Ред.'} to={'#'}/></td>
                                <td><Link text={'Удалить.'} to={'#'}/></td>
                            </tr>
                        )
                    }
                )
        }
        </>
    )

    const Table = () => {
        return (
            <table>
                <thead>
                <tr>
                    <th>Перечень товаров</th>
                    <th>Стоимость</th>
                    <th>Дата изменения</th>
                    <th colSpan={2}>Управление</th>
                </tr>
                </thead>
                <tbody>
                <Rows/>
                </tbody>
            </table>
        )
    }

    const data = appState.loading ? null : <Table/>;
    const loading = appState.loading ? <Spinner/> : null;
    const error = appState.repos.length ? null :  <h2>Нет данных</h2>;

    return (
        <ItemListStyled>
            <Flex justify={"flex-end"}>
                <Button text={"Добавить товар"}/>
            </Flex>
            {error}
            {loading}
            {data}
        </ItemListStyled>
    )
}

export default ItemList;