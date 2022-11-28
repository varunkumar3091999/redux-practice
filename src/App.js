import { useSelector } from "react-redux";
import { increment, decrement } from "./actions";
import { useDispatch } from "react-redux";
import { useState } from "react";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const [differenceValue, setDifferenceValue] = useState();

  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>{counter}</h1>
      <label>Increment/Decrement By</label>
      <input
        type={"number"}
        value={differenceValue}
        onChange={(e) => setDifferenceValue(parseInt(e.target.value))}
      />
      <button onClick={() => setDifferenceValue("")}>reset</button>
      <button onClick={() => dispatch(increment(differenceValue))}>plus</button>
      <button onClick={() => dispatch(decrement(differenceValue))}>
        minus
      </button>
      {isLogged ? "logged" : "not logged"}
    </div>
  );
}

export default App;
