import TodoItem from "./TodoItem"
import styles from "./TodoItem.module.css";
const TodoItems=({todoItems , onDeleteClick})=>{
   return (
    <div className={styles.itemContainer}>
      {todoItems.map((item)=>(
        <TodoItem
        key={item.name}  
        TodoName={item.name} 
        TodoDate={item.dueDate}
        onDeleteClick={onDeleteClick}></TodoItem>
      ))}

      </div>
   
   );
};
export default TodoItems;