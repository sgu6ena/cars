import React, {useState} from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {useAppSelector} from './hooks/redux'

import Login from './components/login';
import Register from './components/register';
import ItemCard from "./components/item-card";
import ItemList from "./components/item-list";
import ErrorMessage from "./components/ErrorMessage";
import {useSelector} from "react-redux";
import { RootState } from './store/store';


function App() {
const {} = useSelector((state:RootState) => state.userReducer.)
    return (
        <BrowserRouter>
            <div className="App">
                <div className="App-header">
                <Routes>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/items"  element={<ItemList/>}/>
                    <Route path="/items/:id" element={<ItemCard  />}/>
                    <Route path="*" element={<ErrorMessage  />}/>

                </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
