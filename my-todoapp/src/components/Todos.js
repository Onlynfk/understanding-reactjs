import React from 'react'
import Input from "./Input";
import TodoItem from "./TodoItem";
import { useDispatch, useSelector } from 'react-redux';

import { selectTodoList, editingTodo, toggleUpdate } from "../features/todo/todoSlice";

function Todos() {
    const todos = useSelector(selectTodoList)
    const editing = useSelector(editingTodo);
    const dispatch = useDispatch()


    
  const toggleHandle = () => {
    dispatch(toggleUpdate())

  }
    return (
        <div className={`main ${editing ? 'bg-dark' : ''}`}>
        <div className="content">
        <div className="tasks">
          <h2>My Todo</h2>
          {editing && <center className="text-center mt-3">
            <i className="btn btn-secondary fas fa-times" aria-hidden="true" onClick={toggleHandle}></i>
          </center>}
          <div className="scroll p-3 scrollable-element">
            {todos.map(todo => (
              <TodoItem
                item={todo.item}
                done={todo.done}
                id={todo.id}
              />
            ))
            }

          </div>
        </div>

        {!editing && <Input />}

      </div>
        </div>
    )
}

export default Todos
