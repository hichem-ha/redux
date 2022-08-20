import React ,{useState} from 'react'
import {Modal , Button , FormControl}from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { editTask } from '../redux/Action/todoActions';

const EditTask = ({todo}) => {
    const [show, setShow] = useState(false);
    const [text, setText] = useState(todo.text);
    const dispatch=useDispatch()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEdit = (e) =>{
    e.preventDefault()
    dispatch(editTask(todo.id,text));
    handleClose();
  }
  
  return (
    <div>
        <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FormControl type='text' value={text} onChange={e=>setText(e.target.value)} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit }>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default EditTask
