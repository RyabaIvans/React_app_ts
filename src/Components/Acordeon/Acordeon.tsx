import React from "react";


type AcordionPropsType = {
    title : string
    collapsed : boolean
}
function Acordion(props: AcordionPropsType) {
    if (props.collapsed === true)  {return (
        <div>
            <AcordionTitle title={props.title}/>
        </div>
    );}
    else
    return (
        <div>
            <AcordionTitle title={props.title}/>
            <AccordionBody/>
        </div>
    );
}

type AcordionTitlePropsType = {
    title : string
}

function AcordionTitle(props: AcordionTitlePropsType) {
    return (
        <>
            <h3>{props.title}</h3>
        </>
    );
}

function AccordionBody() {
    return (
        <>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </>
    );
}


export default Acordion;