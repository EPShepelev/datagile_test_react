import React from "react";
import { ICounter } from "../../interfaces/ICounter";
import { countersSlice } from "../../store/reducers/countersSlice";
import { useAppDispatch } from "../../hooks/redux";

interface CounterProps {
  elem: ICounter;
}

export const Counter: React.FC<CounterProps> = ({ elem }) => {
  const { increment, decrement } = countersSlice.actions;
  const dispatch = useAppDispatch();
  return (
    <>
      <button onClick={() => dispatch(decrement(elem.id))}>-</button>
      <span> {elem.value} </span>
      <button onClick={() => dispatch(increment(elem.id))}>+</button>
    </>
  );
};
