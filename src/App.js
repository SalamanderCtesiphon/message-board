import './App.css';
import CreatePost from './components/CreatePost';
import Header from './components/Header';
import Modal from './components/Modal';
import { useState } from 'react';

function App() {
  const [showModal, setShowModal] = useState(false);

  const toggleShowModal = () => {
    setShowModal(!showModal);
  }
  return (
    <div className="App">
      <Header />
      <CreatePost toggleShowModal={toggleShowModal}/>
      <Modal show={showModal} onCloseButtonClick={toggleShowModal} />

    </div>
  );
}

export default App;
