import "./App.css";

import Todo from "./Todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo titre="Learn React" formatio="advancia"></Todo>
      <Todo titre="Learn Angular"></Todo>
      <Todo titre="learn Spring"></Todo>
    </div>
  );
}

export default App;
