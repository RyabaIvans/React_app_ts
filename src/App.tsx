import React from 'react';
import './App.css';
import Acordion from "./Components/Acordeon/Acordeon";
import Rating from "./Components/Rating/Rating";

function App() {
    return (
        <>
            <PageTitle title={"This is app"}/>
            Article1
            <Rating value={3}/>
            <Acordion title={"Acordion title 1"} collapsed={true}/>
            <Acordion title={"Acordion title 2"} collapsed={false}/>
            Article2
            <Rating value={4}/>
        </>
    );
}

type PageTitlePropsType = {
    title : string
}
function PageTitle(props:PageTitlePropsType) {
    return (
        <>
            <h1>{props.title}</h1>
        </>
    );
}


export default App;
