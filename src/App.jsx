import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartContainer from "./Components/CartContainer";
import Modal from "./Components/Modal";
import Navbar from "./Components/Navbar";
import { calculateTotals, getFetchData } from "./features/cart/cartSlice";

function App() {
  const { cartItems, isLoading } = useSelector((state) => state.cart);
  const { isOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getFetchData());
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </>
  );
}
export default App;
