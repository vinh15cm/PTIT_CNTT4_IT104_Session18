import React, { useReducer } from 'react'
type Job={
    id:number;
    title:string;
    compeletes:boolean
}
export default function Todos() {
    const initial={
        jobs:[
      {
         id:1,
       title:"hoc C++",
       compeletes:true,
      },
      {
         id:2,
       title:"Python",
       compeletes:true,
      },
      {
         id:3,
       title:"hoc React",
       compeletes:true,
      },

        ]
    }
    const  todoReducer=(state:any,action:any)=>{
        switch (action.type) {
            case "ADD":
                console.log("them cong viec");
                return 
            case "DELETE":
                return state
            case "EDIT":
                return state   
        
            default:
                state;
        }
    }
    const [todos,dispatch]=useReducer(todoReducer,initial)
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        console.log(e.target.value);
        initial.new_title=e.target.value;   
    }
    const add_Todo

  return (
    <div>
      <input type="text" name='' id='' />
      <button>Ten cong viec</button>
      <h3>Danh sach cong viec</h3>
      {todos.job.map((state:Job,index:number)=>{
        return <li key={index}>{item.title}</li>
        })}
    </div>
  )
}
