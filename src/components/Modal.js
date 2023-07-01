const Modal = ({ show, onCloseButtonClick, post, setPost, submitPost }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-wrapper">
      <div className="modal">
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