import logo from "./logo.svg";
import "./App.css";

function App() {
  // function formatName(user) {
  //   return user.firstName + " " + user.lastName
  // }
  // function sum (nums) {
  //   return nums.first + nums.second
  // }

  // const nums = {
  //   first: 1,
  //   second: 2
  // }
  // const user = {
  //   firstName: "Harper",
  //   lastName: "har"

  // }

  // return (
  //   <div className="App">
  //     <h1>HI, {formatName(user)} </h1>

  //     <h2>{tick()}</h2>
  //   </div>
  // );
  
  

  return (
    <div className='todoContainer'>
      <h1>ToDo List</h1>
      <div className="searchContainer">
        <input type="text" name="" id="search" placeholder="New Task" />
        <button className="btn">Add</button>
      </div>
      <div className="lists">
        <div className="mainList">
          
        </div>
      </div>
    </div>
  )
}

export default App;
