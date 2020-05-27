import React from 'react'
 
const Todos =({todo, deleteTodo}) => {
    const todoList= todo.length ? (
        todo.map(todoarg => {
            return (
                <div className="collection-item" key= {todoarg.id}>
                    <span onClick={() => {deleteTodo(todoarg.id)}}> {todoarg.content} </span>
                </div>
            )
        })
    ) : (
        <p className="center"> You have no To Do's left! </p>
    )
    return(
        <div className="todos collection">
        {todoList}
        </div>
    )
}
export default Todos