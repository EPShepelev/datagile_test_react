import { useAppSelector } from "../../hooks/redux";
import { Counter } from "../Counter/Counter";
import { FourthCounter } from "../FourthCounter/FourthCounter";
import { countersSlice } from "../../store/reducers/countersSlice";
import { useAppDispatch } from "../../hooks/redux";

export const List = () => {
  const { counters } = useAppSelector((state) => state.countersReducer);
  const { deleteCounter } = countersSlice.actions;
  const dispatch = useAppDispatch();

  return (
    <ul>
      {counters.map((el) => (
        <li key={el.id}>
          {!el.isFourth && <Counter elem={el} />}
          {el.isFourth && <FourthCounter elem={el} />}
          <button onClick={() => dispatch(deleteCounter(el.id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
