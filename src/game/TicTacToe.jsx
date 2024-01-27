import { useState } from "react";
import "../game/tic.css";

const boxes = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const TicTacToe = () => {
  const [values, setValue] = useState(boxes.fill(""));
  const [current, setCurrent] = useState("X");
  const [status, setStatus] = useState("");
  const ticFunc = (index) => {
    const data = [...values];
    data[index] = current;
    setValue(data);
    setCurrent(current === "X" ? "O" : "X");
    /**
     * [0,1,2]
     * [3,4,5]
     * [6,7,8]
     **/
    if (
      (data[0] === "X" && data[1] === "X" && data[2] === "X") ||
      (data[3] === "X" && data[4] === "X" && data[5] === "X") ||
      (data[6] === "X" && data[7] === "X" && data[8] === "X") ||
      (data[0] === "X" && data[3] === "X" && data[6] === "X") ||
      (data[1] === "X" && data[4] === "X" && data[7] === "X") ||
      (data[2] === "X" && data[5] === "X" && data[8] === "X") ||
      (data[0] === "X" && data[4] === "X" && data[8] === "X") ||
      (data[2] === "X" && data[4] === "X" && data[6] === "X")
    ) {
      setStatus("Player X win");
      console.log("x");
    }
    if (
      (data[0] === "O" && data[1] === "O" && data[2] === "O") ||
      (data[3] === "O" && data[4] === "O" && data[5] === "O") ||
      (data[6] === "O" && data[7] === "O" && data[8] === "O") ||
      (data[0] === "O" && data[3] === "O" && data[6] === "O") ||
      (data[1] === "O" && data[4] === "O" && data[7] === "O") ||
      (data[2] === "O" && data[5] === "O" && data[8] === "O") ||
      (data[0] === "O" && data[4] === "O" && data[8] === "O") ||
      (data[2] === "O" && data[4] === "O" && data[6] === "O")
    ) {
      setStatus("Player O win");
      console.log("O");
    }
  };

  return (
    <>
      <div>
        <span>Current Palyer : </span>
        {current}
      </div>
      <div>{status}</div>
      <div className="grid-box">
        {values.map((value, index) => (
          <div key={index} className="each-box" onClick={() => ticFunc(index)}>
            {value}
          </div>
        ))}
      </div>
    </>
  );
};

export default TicTacToe;
