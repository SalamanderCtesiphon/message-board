import deleteBtn from '../icons/icons8-close.svg'

const Modal = ({ show, toggleShowModal, post, setPost, submitPost }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-wrapper">
      <div className="modal">
        <img 
          src={deleteBtn} 
          alt="delete" 
          id='dlt-btn'
          onClick={toggleShowModal}
        />
      <div className="input-wrapper">
        <textarea 
          className="input-box" 
          type='text' 
          placeholder="Enter your text" 
          size={80} 
          value={post}
          onChange={(e) => setPost(e.target.value)}
        ></textarea>
        <span className="underline"></span>
      </div>

        <div className="footer">
          <button className="post-btn2" onClick={submitPost}>POST</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;