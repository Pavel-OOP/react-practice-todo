function Modal(props) {

  function confirmHandler() {
    props.confirm();
  }

  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={props.cancel}>
        {/* onClick={props.cancel} is same as onClick={cancelHandler} */}
        Cancel
      </button>
      <button className="btn" onClick={confirmHandler}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;
