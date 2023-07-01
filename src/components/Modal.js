const Modal = ({ show, onCloseButtonClick }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-wrapper">
      <div className="modal">
      <div class="input-wrapper">
        <textarea class="input-box" type='text' placeholder="Enter your text" size={80}></textarea>
        <span class="underline"></span>
      </div>

        <div className="footer">
          <button className="post-btn2" onClick={onCloseButtonClick}>POST</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;