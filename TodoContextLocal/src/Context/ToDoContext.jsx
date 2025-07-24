// first make a context.
// then make its provider.
// then give it the values you want to share.
// wrap the provider around the app...indicating that everything has the access to the values of the provider,
// and then use the context in the components.

import { createContext } from "react";
import { useContext } from "react";

export const ToDoContext = createContext({
    todos:[
        {
            id: 1,
            ToDo: "Clean the Dishes",
            completed: false,
        },
    ],

    addTodo:(todo) => {},
    deleteTodo:(id) => {},
    updateTodo:(id,todo) => {},
    toggleTodo:(id) => {},
})

// Now its provider:
    // Approach-No:1

// export const ToDoProvider = ({children}) =>{
//     return(
//         <ToDoContext.Provider value={{todos,addTodo,deleteTodo,updateTodo,toggleTodo}}>

//             {children}
//         </ToDoContext.Provider>
//     )
// }

    // Approach-No:2
export const ToDoProvider = ToDoContext.Provider;
// not providing the values here. Well provide in the entry file.(App.jsx)

export function useTodo(){
    return(useContext(ToDoContext))
} 

// Now like a normal -> Hook we use it and we dont have to write the useContext(ToDoContext) -> in every file we want to get and set the values provided by the provider.

//  no matter either its attributes or functions..the key:value concept will be there in case of an object.
// todos: [], addtodo: (paramete) => {}, deletetodo: () => {}