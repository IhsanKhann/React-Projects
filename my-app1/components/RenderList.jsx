function List() {
let fruits = ["orange", "mango", "peach", "apple"];
let ListItems = fruits.map( (fruit) => <li> {fruit} </li> );
// without key the react is confused.                    
  return (
    <>
      <ul>
        {ListItems} 
      </ul>
    </>
  );
}
export default List;
