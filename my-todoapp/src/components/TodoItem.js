import React, { Fragment, useState } from 'react'
import { setCheck, editingTodo, deleteTodo, updateTodo, toggleUpdate } from '../features/todo/todoSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";



function TodoItem({ done, id, item, }) {
  const [newInput, setupdateInput] = useState(item)
  const editing = useSelector(editingTodo)

  const dispatch = useDispatch()

  const deleteTodoHandle = () => {
    dispatch(deleteTodo(id))
  }



  const updateTodoHandle = () => {
    dispatch(toggleUpdate())

  }


  const handleOnCheck = () => {
    dispatch(setCheck(id))
  }

  const newTodoHandler = (event) => {
    event.preventDefault()

    dispatch(updateTodo({
      item: newInput,
      done: false,
      id: id,
    })
    );

    setupdateInput('')
  }

  return (
    <Fragment onClick={updateTodoHandle}>
      {!editing && <div class=" item ">
        <span>
          <input
            class="form-check-input"
            type="checkbox"
            checked={done}
            id={id}
            onChange={handleOnCheck}

          />
          <label class="form-check-label" for={id}>
            {" "}
            <p className={done && 'todo__done'}> {item}</p>
          </label>
        </span>
        <small className="btns ml ">
          {" "}

          <button href="#" class="btn btn btn-sm  text-white" onClick={updateTodoHandle} >
            <i class=" fa fas text-dark fa-edit"></i>{" "}
          </button>
          <button href="#" class="btn btn btn-sm text-white" onClick={deleteTodoHandle}>
            <i class=" fa fas text-dark fa-trash"></i>
          </button>
        </small>


      </div>}


      {editing &&
        <form class="form-group mb-3">
          <label for=""></label>
          <input
            type="text"
            name=""
            id=""
            value={newInput} onChange={e => setupdateInput(e.target.value)}
            class="form-control border-0 search-input "
            placeholder="todo object input"
            aria-describedby="helpId"
          />
          <button className="ml" type="buttton" onClick={newTodoHandler}>
            <i class="fas fa-arrow-up icon search-icon text-dark"></i>
          </button>
        </form>

      }
    </Fragment>
  )
}

export const updateInput = false;

export default TodoItem;
