const AddTodo = (props) => {

let handleSubmit = () => {
    let title = document.querySelector("#todoTitle").value;
    let description = document.querySelector("#todoDesc").value;

    props.addTodo(title,description);
}
  return (
    <div style={{padding:"40px"}}>
        <label htmlFor="todoTitle">Todo titel:</label>
        <input type="text" id="todoTitle"/>

        <label htmlFor="todoDesc">Todo beskrivning:</label>
        <input type="text" id="todoDesc"/>
        <br/>
        <button onClick={handleSubmit}>Add todo!</button>
    </div>
  )
}

export default AddTodo