import React from 'react';
import Login from './components/login';
import Register from './components/register';

import ItemCard from "./components/item-card";
import ItemList from "./components/item-list";


import './App.css';


import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {

    return (
        <BrowserRouter>
            <div className="App">
                <div className="App-header">
                <Routes>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/items"  element={<ItemList/>}/>
                    <Route path="/items/:id" element={<ItemCard  />}/>
                </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
