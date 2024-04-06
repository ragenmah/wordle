import React from "react";
import "./index.css";

const Keyboard = ({ onKeyPress }) => {
  const handleKeyPress = (key) => {
    onKeyPress(key);
  };

  return (
    <div class="keyboard">
      <div class="key" onClick={() => handleKeyPress("Q")}>
        Q
      </div>
      <div class="key" onClick={() => handleKeyPress("W")}>
        W
      </div>
      <div class="key" onClick={() => handleKeyPress("E")}>
        E
      </div>
      <div class="key" onClick={() => handleKeyPress("R")}>
        R
      </div>
      <div class="key" onClick={() => handleKeyPress("T")}>
        T
      </div>
      <div class="key" onClick={() => handleKeyPress("Y")}>
        Y
      </div>
      <div class="key" onClick={() => handleKeyPress("U")}>
        U
      </div>
      <div class="key" onClick={() => handleKeyPress("I")}>
        I
      </div>
      <div class="key" onClick={() => handleKeyPress("O")}>
        O
      </div>
      <div class="key" onClick={() => handleKeyPress("P")}>
        P
      </div>

      <div class="key" onClick={() => handleKeyPress("A")}>
        a
      </div>
      <div class="key" onClick={() => handleKeyPress("S")}>
        s
      </div>
      <div class="key" onClick={() => handleKeyPress("D")}>
        d
      </div>
      <div class="key" onClick={() => handleKeyPress("F")}>
        f
      </div>
      <div class="key" onClick={() => handleKeyPress("G")}>
        g
      </div>
      <div class="key" onClick={() => handleKeyPress("H")}>
        h
      </div>
      <div class="key" onClick={() => handleKeyPress("J")}>
        j
      </div>
      <div class="key" onClick={() => handleKeyPress("K")}>
        k
      </div>
      <div class="key" onClick={() => handleKeyPress("L")}>
        l
      </div>

      <div class="key delete" onClick={() => handleKeyPress("delete")}>
        Delete
      </div>
      <div class="key" onClick={() => handleKeyPress("Z")}>
        z
      </div>
      <div class="key" onClick={() => handleKeyPress("X")}>
        x
      </div>
      <div class="key" onClick={() => handleKeyPress("C")}>
        c
      </div>
      <div class="key" onClick={() => handleKeyPress("V")}>
        v
      </div>
      <div class="key" onClick={() => handleKeyPress("B")}>
        b
      </div>
      <div class="key" onClick={() => handleKeyPress("N")}>
        n
      </div>
      <div class="key" onClick={() => handleKeyPress("M")}>
        m
      </div>
      <div class="key enter" onClick={() => handleKeyPress("enter")}>
        Enter
      </div>
    </div>
  );
};

export default Keyboard;
