export function incrementNumEverySecond(
  stateNum: number,
  setStateNum: (num: number) => void
) {
  let current = stateNum;
  return function () {
    setInterval(function () {
      current++;
      setStateNum(current);
    }, 1000);
  };
}
