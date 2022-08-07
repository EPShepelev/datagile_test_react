import React, { useEffect, useState } from "react";
import { countersSlice } from "../../store/reducers/countersSlice";
import { ICounter } from "../../interfaces/ICounter";
import { incrementNumEverySecond } from "../../helpers/incrementNumEverySecond";
import { useAppDispatch } from "../../hooks/redux";

interface CounterProps {
  elem: ICounter;
}

export const FourthCounter: React.FC<CounterProps> = ({ elem }) => {
  const { timerCounter } = countersSlice.actions;
  const dispatch = useAppDispatch();
  const [secondsCount, setSecondsCount] = useState(0);
  let newCounter = incrementNumEverySecond(secondsCount, setSecondsCount);

  useEffect(() => {
    newCounter();
    dispatch(timerCounter({ id: elem.id, value: secondsCount }));
  }, [secondsCount, elem.id, newCounter, timerCounter, dispatch]);

  return (
    <>
      <span> {elem.value} </span>
    </>
  );
};
