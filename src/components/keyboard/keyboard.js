import React from "react";
import "./index.css";

const Keyboard = ({ onKeyPress }) => {
  const handleKeyPress = (key) => {
    onKeyPress(key);
  };

  return (
    <div className="keyboard">
      <div className="key" onClick={() => handleKeyPress("Q")}>
        Q
      </div>
      <div className="key" onClick={() => handleKeyPress("W")}>
        W
      </div>
      <div className="key" onClick={() => handleKeyPress("E")}>
        E
      </div>
      <div className="key" onClick={() => handleKeyPress("R")}>
        R
      </div>
      <div className="key" onClick={() => handleKeyPress("T")}>
        T
      </div>
      <div className="key" onClick={() => handleKeyPress("Y")}>
        Y
      </div>
      <div className="key" onClick={() => handleKeyPress("U")}>
        U
      </div>
      <div className="key" onClick={() => handleKeyPress("I")}>
        I
      </div>
      <div className="key" onClick={() => handleKeyPress("O")}>
        O
      </div>
      <div className="key" onClick={() => handleKeyPress("P")}>
        P
      </div>

      <div className="key" onClick={() => handleKeyPress("A")}>
        a
      </div>
      <div className="key" onClick={() => handleKeyPress("S")}>
        s
      </div>
      <div className="key" onClick={() => handleKeyPress("D")}>
        d
      </div>
      <div className="key" onClick={() => handleKeyPress("F")}>
        f
      </div>
      <div className="key" onClick={() => handleKeyPress("G")}>
        g
      </div>
      <div className="key" onClick={() => handleKeyPress("H")}>
        h
      </div>
      <div className="key" onClick={() => handleKeyPress("J")}>
        j
      </div>
      <div className="key" onClick={() => handleKeyPress("K")}>
        k
      </div>
      <div className="key" onClick={() => handleKeyPress("L")}>
        l
      </div>

      <div className="key delete" onClick={() => handleKeyPress("delete")}>
        Delete
      </div>
      <div className="key" onClick={() => handleKeyPress("Z")}>
        z
      </div>
      <div className="key" onClick={() => handleKeyPress("X")}>
        x
      </div>
      <div className="key" onClick={() => handleKeyPress("C")}>
        c
      </div>
      <div className="key" onClick={() => handleKeyPress("V")}>
        v
      </div>
      <div className="key" onClick={() => handleKeyPress("B")}>
        b
      </div>
      <div className="key" onClick={() => handleKeyPress("N")}>
        n
      </div>
      <div className="key" onClick={() => handleKeyPress("M")}>
        m
      </div>
      <div className="key enter" onClick={() => handleKeyPress("enter")}>
        Enter
      </div>
    </div>
  );
};

export default Keyboard;
