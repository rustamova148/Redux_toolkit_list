import { useDispatch, useSelector } from "react-redux"
import { addItem, removeItem, toggleImportant } from "./redux/features/content/contentSlice";

const App = () => {


const dispatch = useDispatch();

const {notes} = useSelector(state => state.notes);

console.log(notes);


const handleSubmit = () => {
  const input = document.getElementById("input");
  dispatch(addItem({id: parseInt(localStorage.getItem("id") || "1"), text: input.value, important: false}));
  input.value = " ";
  localStorage.setItem("id", (parseInt(localStorage.getItem("id") || "1") + 1).toString())
}
  return (
    <div className="app">
      <div className="box">
      <input type="text" id="input" />
      <button onClick={handleSubmit} className="addbtn">Add</button>

      {notes.map((note,i)=>
      <ul key={i}>
        <li>{note.text}</li>
        <div className="li-btns">
        <button style={{backgroundColor:"#e9c46a"}}onClick={()=>dispatch(removeItem(note.id))}>delete</button>
        
        <button style={{
          backgroundColor: note.important ? "#e76f51" : "#2a9d8f"}} 
          onClick={()=>dispatch(toggleImportant(note.id))}>
          {note.important ? "important" : "not important"} 
        </button>
        </div>
      </ul>
      )}
      </div>

    </div>
  )
}

export default App