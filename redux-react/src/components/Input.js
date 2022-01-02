import React, { useState } from 'react'
import './input.css'
import {useDispatch} from 'react-redux';
import TodoActions from '../features/todoSlice';


const Input = () => {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (event) =>{
        event.preventDefault()
        console.log("adding input", {input}) 

        dispatch(TodoActions.saveTodo({
            item:input,
            done:false,
            id:Date.now(),
        })
        );

        setInput('')
    }
    return (

      

            <form class="form-group mb-3">
            <label for=""></label>
            <input
              type="text"
              name=""
              id=""
              value={input} onChange={e=>setInput(e.target.value)}
              class="form-control border-0 search-input "
              placeholder="todo object input"
              aria-describedby="helpId"
            />
            <button  type="buttton" onClick={addTodoHandler}>
              <i class="fas fa-arrow-up icon search-icon text-white"></i>
            </button>
          </form>
    
    )
}

export default Input;
