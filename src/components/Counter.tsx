import { useDispatch, useSelector } from "react-redux";
import { reset, decrement, increment } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counterR.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <>
    <div className="button-row">
      <button onClick={handleDecrement}>-</button>
      <h1>
        Count: {count} 
      </h1>
      <button onClick={handleIncrement}>+</button>
    </div>
    <button onClick={handleReset}>Reset</button>
    </>
  );
};

export default Counter;
