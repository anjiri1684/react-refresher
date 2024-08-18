/* eslint-disable react/prop-types */
function Modal({ onClick }) {
  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={onClick}>
        Cancel
      </button>

      <button className="btn" onClick={onClick}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;
