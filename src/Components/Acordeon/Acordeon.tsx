import React from "react";

function Acordeon(props: any) {
    return (
        <div>
            <AcordeonTitle title={props.title}/>
            <AcordeonBody/>

        </div>
    );
}

function AcordeonTitle(props: any) {
    return (
        <>
            <h3>{props.title}</h3>
        </>
    );
}

function AcordeonBody() {
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


export default Acordeon;