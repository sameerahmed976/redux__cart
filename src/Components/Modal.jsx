import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { closeModal, openModal } from "../features/modal/modalSlice";

const Modal = () => {
  //   console.log(`* ~ file: Modal.jsx:6 ~ Modal ~ isOpen`, isOpen);
  const { isOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  return (
    <>
      (
      <aside className="modal-container">
        <div className="modal">
          <h4>remove all items from your shopping cart?</h4>
          <div className="btn-container">
            <button
              className="btn confirm-btn"
              onClick={() => {
                dispatch(clearCart());
                dispatch(closeModal());
              }}
            >
              Confirm
            </button>
            <button
              className="btn clear-btn"
              onClick={() => dispatch(closeModal())}
            >
              Cancel
            </button>
          </div>
        </div>
      </aside>
      )
    </>
  );
};

export default Modal;
