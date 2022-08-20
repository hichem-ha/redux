
import React from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { doneTask, removeTask } from '../redux/Action/todoActions';
import EditTask from './EditTask';


const Task = ({todo}) => {
  const dispatch=useDispatch()

  return (
    <div style={{display:'flex', width:'50%' , justifyContent:'space-around' , alignItems:'center', margin:'auto', marginTop:'20px'}} >
        <p style={{textDecoration : todo.done ? 'line-through': null}}>{todo.text} </p>
        <Button variant='danger' style={{position: 'relative'}} onClick={()=>dispatch(removeTask(todo.id))}>{' '} Delete</Button>
       <EditTask todo={todo}/> 
        <Button variant='secondary' style={{}} onClick={()=>dispatch(doneTask(todo.id))}>Done</Button>


    </div>
  )
}

export default Task;