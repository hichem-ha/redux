import { ADDTASK, DONETASK, EDITTASK, REMOVETASK } from "../ActionTypes/todoTypes"

export const addTask=(newTask)=>{
    return {
        type:ADDTASK ,
        payload: newTask ,
    }
}
export const removeTask=(id)=>{
    return {
        type:REMOVETASK ,
        payload: id ,
    }
}
export const doneTask=(id)=>{
    return {
        type:DONETASK ,
        payload: id ,
    }
}
export const editTask=(id , newText)=>{
    return {
        type:EDITTASK ,
        payload: {id , newText} ,
    }
}