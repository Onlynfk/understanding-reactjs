import React, { useState } from 'react'
import {useDispatch} from 'react-redux';
import {updateTodo} from '../features/todo/todoSlice';
import   updateInput  from './TodoItem'

const Input = () => {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()
    console.log(updateInput);


    const addTodoHandler = (event) =>{
        event.preventDefault()

     

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
