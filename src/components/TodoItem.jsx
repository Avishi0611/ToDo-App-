import { AiFillDelete } from "react-icons/ai";

function TodoItem({TodoName , TodoDate , onDeleteClick}){
  return <div className="container">
    <div className="row align-items-center kg-row mb-2">
    <div className="col-6">
    {TodoName}
    </div>
    <div className="col-4">
      {TodoDate}
    </div>
    <div className="col-2 d-flex align-items-center">
      <button 
      type="button" 
      className="btn btn-danger kg-button"
      onClick={()=>onDeleteClick(TodoName)}> 
      {/* <AiFillDelete/> */}
      Delete</button>
       </div>
  </div>
  </div>
}
export default TodoItem; 