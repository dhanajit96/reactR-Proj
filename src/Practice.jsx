import { useState } from "react";

const Practice = () => {
    let [value, setValue]= useState(0);
    function handelClick(name){
        console.log('you just click button '+ name);
    }
//     function changeName(){
//             setValue(value+1);
//   }
//     function changeName1(){
//         setValue(value-1);
// }
// function changeName2(){
//     setValue(0);
// }
    return ( 
        <div className="practice">
            <h1>{value} </h1>
            <button onClick={()=>setValue(value++)}> increase</button><br />
            <button onClick={()=>setValue(value--)}>Decrease</button><br />
            <button onClick={()=>setValue(0)}>Reset</button><br />
            <button onClick={()=>handelClick('ajit')}>click here</button>
        </div>
     );
}
 

export default Practice ;