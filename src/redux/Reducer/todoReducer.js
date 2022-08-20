import { ADDTASK, DONETASK, EDITTASK, REMOVETASK } from "../ActionTypes/todoTypes";

const initialState = {
   todos:[
    {
        id:Math.random(), done:false , text:'Learn HTML'
    },
    {
        id:Math.random(), done:false , text:'Learn CSS'
    },
    {
      id:Math.random(), done:false , text:'Learn Git & GitHub'
    },
    {
      id:Math.random(), done:false , text:'Learn JavaScript'
  },
    {
      id:Math.random(), done:false , text:'Learn React'
  },  
{
  id:Math.random(), done:false , text:'Learn Node.js'
},
   ]
  };
  const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADDTASK:
        return {
          ...state , todos:[...state.todos , action.payload]
        };
        case REMOVETASK:
          return {
            ...state,todos:state.todos.filter(todo=>todo.id !== action.payload)
          };
          case DONETASK:
            return {
              ...state,todos:state.todos.map(todo=>todo.id === action.payload ? {...todo,done:!todo.done}:todo)
            };
            case EDITTASK:
              return {
                ...state,todos:state.todos.map(todo=>todo.id === action.payload.id ? {...todo, text:action.payload.newText}:todo)
              }
        break;
    
      default:
        return state
        
    }
  }
  export default todoReducer;