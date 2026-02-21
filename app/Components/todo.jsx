"use client"
import { useEffect,useState } from "react";
export default  function Todo() {
    const [todo,setTodo] = useState(null);
    useEffect(async()=>{
      
            const response = await fetch(   
                "https://dummyjson.com/posts"
            );
            const data = await response.json();
            setTodo(data);
  
    },[])

    return (
        <div>       
        <h1>{todo.title}</h1>
     
        </div>

    )
}
