const Todo = (props) => {


  return (
    <div style={{border:"2px solid white"}}>
        {/* Om denna todo är utförd, ger vi den klassen completed (dvs en grön färg)  */}
        <h3 className={props.completed && "completed"}>{props.title}</h3>
        {/* Om todo ej är utförd, skriver vi ut beskrivning och en knapp för att utföra denna todo*/}
        {!props.completed && <>
        <h3>{props.description}</h3>
        <button onClick={() => {props.completeTodo(props.id)}}>Complete todo</button>
        </>}
    </div>
  )
}

export default Todo