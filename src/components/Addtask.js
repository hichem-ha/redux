import { Button ,FormControl , Form ,NavDropdown ,Nav ,Navbar,Container} from 'react-bootstrap'
import React , {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../redux/Action/todoActions'

const Addtask = () => {
    const [text, setText] = useState('') 
    const dispatch=useDispatch()
    const addNewTask=(e)=>{
       e.preventDefault()
       dispatch(addTask({id:Math.random(), done:false , text}));
       setText('')
       
    }
  return (
    <div>
       <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">To-DO List</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        
          <Form className="d-flex"  style={{marginLeft:'600px'}} onSubmit={addNewTask}>
            <Form.Control
              type="text"
              placeholder="Add new Task"
              className="me-2"
            
               value={text} onChange={(e)=>setText(e.target.value)}
            />
            <Button variant="outline-success" type='submit'>Add</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
    </div>
  )
}

export default Addtask
