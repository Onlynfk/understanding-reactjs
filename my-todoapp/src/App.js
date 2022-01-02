import Todos from "./components/Todos";
import EditTodoItem from "./components/EditTodoItem";
import { BrowserRouter as  Route, Router } from 'react-router-dom';

function App() {



  return (

    <Router>
        <Route exact path="/" component={Todos} />

      <Route exact path="/todo/:id" component={EditTodoItem} />
    </Router>

  );
}

export default App;
