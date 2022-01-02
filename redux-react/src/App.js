import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Input from "./components/Input";
import TodoItem from "./components/TodoItem";

import "./App.css";

function App() {
  const dispatch = useDispatch();

  return (
    <div class="main">
      <div class="content">
        <div class="tasks">
          <h2>My Todo</h2>

          <div class="scroll p-3 scrollable-element">
           <TodoItem/>
          </div>
        </div>
        

        <Input />
      </div>
    </div>
  );
}

export default App;
