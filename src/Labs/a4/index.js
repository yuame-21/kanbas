import React from "react";
import Add from "./Add";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";

const Assignment4 = () => {
    function sayHello() {
        alert("Hello");
    }

    return(
        <>
            <h1>Assignment 4</h1>
            <Add a={1} b={2} />
            <ClickEvent />
            <PassingDataOnEvent />
            <PassingFunctions theFunction={sayHello} />
            <EventObject/>
        </>
    );
};
export default Assignment4;