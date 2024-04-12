import {useState} from 'react'
const UseCounter=()=>{
    const [count,setCounter]=useState(0);
    const increment=()=>{
        setCounter(1+count);
    }
    const decrement=()=>{
        setCounter(1-count);

    }
return {count,increment,decrement}
    
};
export { UseCounter};