import React, { useReducer } from 'react'

export default function UseReducer() {
    const initialState={
        count:0
    };
    const countReducer=(state1:any,action1:any)=>{
        console.log("action",action1);
        // if(action1=="INCREASE"){
        //     return{count:state1.count+action1.payload}
        // }else if(action1=="DECREASE"){
        //     return{count:state1.count-action1.payload}
        // }
        // return state1
        switch (action1.type) {
            case "INCREASE":
                return{count:state1.count+action1.payload};
            case "DECREASE":
                return{count:state1.count-action1.payload}
                
            default:
                return state1
        }
        
       
    }
    const [state,dispatch]= useReducer(countReducer,initialState);
    const increase=()=>{
        dispatch({type:"INCREASE",payload:1})
    }
    const decrease=()=>{
        dispatch({tye:"DECREASE",payload:1})
    }
  return (
    <div>
      <h2>UseReducer</h2>
      <p>gia tri count:{state.count}</p>
      <button onClick={increase}>Tang</button>
      <button onClick={decrease}>Giam</button>
    </div>
  )
}
