import './App.css';
import AddTodo from './components/AddTodo';
import Todos from './components/todo';

function App() {
  return (
    <div className="App">
      <h1>Learn Redux Toolkit</h1>
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;