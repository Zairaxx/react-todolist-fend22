import { useState } from 'react';
import './App.css';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';
function App() {
  let data = [
    {
      title: "En rolig todo att göra 1",
      description:"Städa osv osv",
      completed:false,
      id:1
    },
    {
      title: "En rolig todo att göra 2",
      description:"Städa osv osv",
      completed:true,
      id:2
    },
    {
      title: "En rolig todo att göra 3",
      description:"Städa osv osv",
      completed:false,
      id:3
    },{
      title: "En rolig todo att göra 4",
      description:"Städa osv osv",
      completed:true,
      id:4
    },{
      title: "En rolig todo att göra 5",
      description:"Städa osv osv",
      completed:false,
      id:5
    },{
      title: "En rolig todo att göra 6",
      description:"Städa osv osv",
      completed:true,
      id:6
    },{
      title: "En rolig todo att göra 7",
      description:"Städa osv osv",
      completed:false,
      id:7
    },{
      title: "En rolig todo att göra 8",
      description:"Städa osv osv",
      completed:true,
      id:8
    },{
      title: "En rolig todo att göra 9",
      description:"Städa osv osv",
      completed:false,
      id:9
    },
    {
      title: "En rolig todo att göra 10",
      description:"Städa osv osv",
      completed:true,
      id:10
    },
  ]

  const [todos, setTodos] = useState(data)

  let addTodo = (title,description) => {
    //
    let newTodo = {
      title,
      description,
      completed:false
    }
    //Vi skapar en array som är en kopia av state av nya array, och lägger även in newTodo i slutet
    setTodos([...todos, newTodo])
  }

  let completeTodo = (id) => {
    //Vi skapar en ny array-kopia av vårt state
    let allTodos = [...todos];

    //Vi ändrar värdet på det id:et (som är satt till ett index på rad 91)
    allTodos[id].completed = true;

    //
    setTodos([...allTodos]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <AddTodo addTodo={addTodo}/>
        {todos.map((todo,i) => <Todo title={todo.title} description={todo.description} completed={todo.completed} completeTodo={completeTodo} id={i}/>)}
        
      </header>
    </div>
  );
}

export default App;
