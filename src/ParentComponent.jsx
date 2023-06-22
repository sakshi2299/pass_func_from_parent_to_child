import React from "react";
import ChildComponent from "./ChildComponent";
const ParentComponent = ()=>{
    const parentFunction=()=>{
        console.log('Parent function called')
    };
    return(
        <div>
            <ChildComponent parentFunction={parentFunction}/>
        </div>
    );
};
export default ParentComponent;
