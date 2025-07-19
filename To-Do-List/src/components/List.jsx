import './List.css' ;

function List(props){
    let ListItems = props.items;
    let Tasks = ListItems.map((task) => <li key={task.id}> {task.id}- {task.task} </li>)
    
    return(
        <>
            <ul>
                {Tasks} ;
            </ul>
        </>
    )
}

export default List ;