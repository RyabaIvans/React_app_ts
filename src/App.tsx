import React from 'react';
import './App.css';
import Acordeon from "./Components/Acordeon/Acordeon";
import Rating from "./Components/Rating/Rating";

function App() {
    return (
        <>
            <PageTitle title={"This is app"}/>
            Article1
            <Rating value={3}/>
            <Acordeon title={"Acordeon title"}/>
            Article2
            <Rating value={4}/>
        </>
    );
}

function PageTitle(props:any) {
    return (
        <>
            <h1>{props.title}</h1>
        </>
    );
}


export default App;
