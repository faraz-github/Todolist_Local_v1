// Bootstrap-CSS
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
// Custom CSS
import "./App.css";

import { useEffect, useRef, useState } from 'react';

import Create from './Create';
import List from './List';
import BootstrapModalComponent from './BootstrapModalComponent';

function App() {

  const [items, setItems] = useState(() => {
    const localData = localStorage.getItem("items");
    return localData ? JSON.parse(localData) : [];
  });
  const task = useRef();

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items))
  }, [items])

  const [showModal, setShowModal] = useState(false);
  const [modalHeader, setModalHeader] = useState("Modal Heading");
  const [modalBody, setModalBody] = useState("Modal Body");
  const [modalFooter, setModalFooter] = useState(<div></div>);

  function addItem(item) {
    setItems([...items, item]);
  }

  function deleteItem(id) {
    setShowModal(true);
    setModalHeader("Confirmation");
    setModalBody("Are you sure you want to delete this task?");
    setModalFooter(<div className="btn-group" role="group">

      <button
        type="button"
        className="btn btn-outline-secondary"
        onClick={() => setShowModal(false)}
      >
        Cancel
      </button>

      <button
        type="button"
        className="btn btn-outline-secondary"
        onClick={() => {
          setItems(items.filter((item, index) => index !== id));
          setShowModal(false);
        }
        }
      >
        Delete
      </button>

    </div>);
  }

  function editItem(item, id) {
    setShowModal(true);
    setModalHeader("Edit task");
    setModalBody(<form>
      <input ref={task} type="text" defaultValue={item} className="form-control" placeholder="Write task" required />
    </form>);
    setModalFooter(<div className="btn-group" role="group">

      <button
        type="button"
        className="btn btn-outline-secondary"
        onClick={() => setShowModal(false)}
      >
        Cancel
      </button>

      <button
        type="button"
        className="btn btn-outline-secondary"
        onClick={() => {
          let temp = items.slice(); //creates the clone of the state
          temp[id] = task.current.value;
          setItems(temp);
          setShowModal(false);
        }
        }
      >
        Update
      </button>

    </div>)
  }

  function handleModal() {
    setShowModal(!showModal);
  }

  return (
    <div className="container">
      <div className="text-center pt-4">
        <h1 className="title">Todolist</h1>
        <p className="subtitle">Never forget your important tasks</p>
      </div>
      <hr/>
      <Create onSubmit={addItem} />
      <List items={items} onDelete={deleteItem} onEdit={editItem} />

      <BootstrapModalComponent
        showModal={showModal}
        handleModal={handleModal}
        header={modalHeader}
        body={modalBody}
        footer={modalFooter}
      />

    </div>
  );
}

export default App;
