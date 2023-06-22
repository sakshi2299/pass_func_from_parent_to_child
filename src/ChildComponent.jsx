import React from "react";
const ChildComponent = ({parentFunction})=>{
    const handleChildClick=()=>{
        console.log('Child button clicked');
        parentFunction();
    };
    return(
        <div>
            <button onClick={handleChildClick}>Child Button</button>
        </div>
    )
}
export default ChildComponent;
