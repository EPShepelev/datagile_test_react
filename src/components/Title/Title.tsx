import { useAppDispatch } from "../../hooks/redux";
import { countersSlice } from "../../store/reducers/countersSlice";

export const Title = () => {
  const { addCounter } = countersSlice.actions;
  const dispatch = useAppDispatch();

  return (
    <div>
      <h1>Counters Test App</h1>
      <button onClick={() => dispatch(addCounter())}>Add new counter</button>
    </div>
  );
};
