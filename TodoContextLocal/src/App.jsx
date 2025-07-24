import { useEffect, useState } from 'react'
import './App.css'
import { ToDoProvider } from './Context/ToDoContext';
import Form from './Components/Form';
import FormItems from './Components/FormItems'; // Make sure this is imported

function App() {
  let [Todos,setTodos] = useState([]) 
  // now to do is an objectWith all the values in it.

  function addTodo(todo) {
    setTodos(prev => [
      ...prev,
      {
        id: Math.random(),
        ...todo 
        // or id: Math.random(),toDo: todo, completed: false.
      }
    ])
  }

  function deleteTodo(id){
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  function updateTodo(id, todo){ 
    setTodos((prev) => prev.map((prevtodo)=> 
      todo.id === id ? { ...prevtodo, ...todo } : prevtodo
    ))
    // {...obj1,...obj2} -> combine two objects. The later one is considered if their keys are same.

    // 2nd Approach:

    // let CopyTodo = [...Todos] ;
    // if Todos was an object: CopyTodo = {...Todos} 
    // loop use..for in(like the for loop in python for i in object)
    // array: todo > CopyArray = [Todos] and loop used will be of array.

    // for(let Todo of CopyTodo){
    //   if(Todo.id === id){
    //     Todo.todo = todo ;
    //   }
    //   else{
    //     Todo.todo = Todo.todo ; 
    //     // nothing changes.
    //   }
    // }
    // setTodos(CopyTodo);
  }

  function toggleTodo(id){
    setTodos((prev)=> prev.map((todo)=> 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  useEffect(() => {
  const storedTodos = localStorage.getItem("Todos");
    if(storedTodos){
      const parsedJobs = JSON.parse(storedTodos);
    }
}, []);


  useEffect(()=>{
    localStorage.setItem("Todos", JSON.stringify(Todos))
  },[Todos])
  
  return (
    // prev is an array.
    // whatever values we provide in the ToDoProvider, we would have to use them in our context as well. The names if dont match there would be error. So what we do is use empty functions in our context and then define the functions of the same name and then use them in the context.
    // map and filter are both the arrays of the array. They are array methods. Filter(),reduce().

    <>
      <ToDoProvider value={{Todos, addTodo, deleteTodo, updateTodo, toggleTodo}}>
        <Form/>
        { // Correct usage of map instead of IIFE + for loop.
          Todos.map((todo) => (
            <FormItems todo={todo} key={todo.id}/>
          ))
        }

      </ToDoProvider>
    </>
  )
}

export default App
