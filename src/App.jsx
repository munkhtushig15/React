import './App.css';
import { useState } from 'react';

const ListItem = (props) => {
  return <div>{props.text}</div>;
};

// function dar () {
//   if {}
// }
// const Ajluud = (ajil) => {
//   return <div className="hiihAjluud">
//           <div className="leftplace">
//             <input type="checkbox" chkBox/>
//             <p className="ajil">
//               {ajil.text}
//             </p>
//           </div>
//           <button className='dltBtn'>delete</button>
//         </div>
// }

function App() {
  
  const [todoLists, setTodoLists] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const clickHandler = () => {
    setTodoLists([...todoLists, inputValue]);
  };

  return (
    <div className='todoListContainer'>
      <h1>ToDoList</h1>
      <div className='yuHiimeerBn'>
        <input className='srchInpt' type="text" 
               onChange={(e) => setInputValue(e.target.value)} />
        <button className='srchbtn' onClick={clickHandler}>Add</button>
          {todoLists.map((todoList) => {
            
            return <ListItem key={todoList + 1} />;
          })}
      </div> 
      <div className="hiihAjluud">
        <div className="leftplace">
          <input type="checkbox" className='chkbox'/>
          <p className="ajil">
            First task
          </p>
        </div>
        <button className='dltBtn'>delete</button>
      </div>
    </div>
  );
}


export default App;
