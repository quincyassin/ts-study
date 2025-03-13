import React from 'react';
import './App.css';
import TsxBase from "./TsxBase";
import List from "./List";
import Button from "./Button";
import State from './State';
import QuestionList from "./question/QuestionList";
import ImmerDemo from "./immer/ImmerDemo";
import UseRefDemo from "./UseRefDemo";

function App() {
    return (
        <div className="App">
            <UseRefDemo/>
            <ImmerDemo/>
            <QuestionList/>
            {/*<List/>*/}
            <Button/>
            <State/>
            <TsxBase/>
        </div>
    );
}

export default App;
