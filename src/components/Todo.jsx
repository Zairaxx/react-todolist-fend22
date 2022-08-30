const Todo = (props) => {


  return (
    <div style={{border:"2px solid white"}}>
        <h3 className={props.completed && "completed"}>{props.title}</h3>
        {!props.completed && <>
        <h3>{props.description}</h3>
        {/*  */}
        <button onClick={() => {props.completeTodo(props.id)}}>Complete todo</button>
        </>}
    </div>
  )
}

export default Todo