import React from 'react';
import logo from './logo.svg';
import './App.css';
import TsxBase from "./TsxBase";
import List from "./List";
import Button from "./Button";

function App() {
    return (
        <div className="App">
            <TsxBase/>
            <List/>
            <Button/>
        </div>
    );
}

export default App;
