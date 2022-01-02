import React from 'react'

function TodoItem() {
    return (
        <div class=" item ">
        <span>
          <input
            class="form-check-input"
            type="checkbox"
            id="item"
          />
          <label class="form-check-label" for="item">
            {" "}
            Work out 20 mins
          </label>
        </span>
        <small class="btns">
          {" "}
          <a href="#" class="btn btn btn-sm text-white">
            <i class=" fa fas text-secondary fa-edit"></i>{" "}
          </a>
          <a href="#" class="btn btn btn-sm text-white">
            <i class=" fa fas text-secondary fa-trash"></i>
          </a>
        </small>
      </div>
    )
}

export default TodoItem;
