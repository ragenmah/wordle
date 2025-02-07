import React, { useState } from "react";
import "./index.css";
import Keyboard from "../../components/keyboard/keyboard";
import Inputs from "../../components/inputs/inputs";
import Heading from "../../components/headings/heading";
import wordList from "../../data/words";
import Result from "../../components/result/result";

const selectWord = () => {
  return wordList[Math.floor(Math.random() * wordList.length)];
};

const Wordle = () => {
  const [inputValue, setInputValue] = useState("");
  var [rowIndex, setRowIndex] = useState(-1);
  var [colIndex, setColIndex] = useState(0);

  const [targetWord] = useState(selectWord());
  const [attemptsLeft, setAttemptsLeft] = useState(6);
  const [guess, setGuess] = useState("");
  const [result, setResult] = useState("");

  const [background, setBackground] = useState("");
  const [correctPosition, setCorrectPosition] = useState(0);
  const [correctPositions, setCorrectPositions] = useState([]);
  const [compltedPositions, setCompletedPosition] = useState([]);

  const handleGuess = () => {
    var targetValue = targetWord.toUpperCase().split("");
    console.log(targetValue);
    setResult("");
    if (guess.length !== targetWord.length) {
      setResult(
        "Invalid guess. The word has " + targetWord.length + " letters."
      );
      return false;
    }
    // console.log("JSON.stringify(guess).toString()");
    // console.log(guess.join("").toString());

    if (guess === targetValue) {
      setResult("Congratulations! You guessed the word!");
      setAttemptsLeft(0);
      return true;
    } else {
      const resultText = checkWord(guess, targetValue);
      setResult(resultText);

      return true;
    }
  };

  const checkWord = (word, target) => {
    // console.log("tardet");
    // console.log(target);
    // console.log(word);

    var correctPosition = [];
    var incorrectPostion = [];
    var incorrectLetter = [];

    if (JSON.stringify(word) === JSON.stringify(target)) {
      console.log("inside");
      for (let i = 0; i < word.length; i++) {
        if (word[i] === target[i]) {
          correctPosition = [
            ...correctPosition,
            {
              rowIndex: i,
              letter: word[i],
              colIndex: colIndex,
              background: "correct-position-color",
            },
          ];
        }
      }
      setCorrectPositions([...correctPosition]);
      return "Congratulations! You guessed the word!";
    } else {
      let correctPositions = 0;
      for (let i = 0; i < word.length; i++) {
        if (word[i] === target[i]) {
          correctPositions++;

          correctPosition = [
            ...correctPosition,
            {
              rowIndex: i,
              letter: word[i],
              colIndex: colIndex,
              background: "correct-position-color",
            },
          ];
        } else {
          incorrectLetter = [
            ...incorrectLetter,
            {
              rowIndex: i,
              letter: word[i],
              colIndex: colIndex,
              background: "incorrect-letters-color",
            },
          ];
        }
      }

      for (let i = 0; i < guess.length; i++) {
        if (guess[i] !== target[i] && target.includes(guess[i])) {
          incorrectPostion = [
            ...incorrectPostion,
            {
              rowIndex: i,
              letter: word[i],
              colIndex: colIndex,
              background: "incorrect-position-color",
            },
          ];
        }
      }
      // console.log("incorrectLetters");
      // console.log(incorrectLetter);
      // console.log("correct position");
      // console.log(correctPosition);
      // console.log("incorrect position");
      // console.log(incorrectPostion);

      setCorrectPosition(correctPositions);
    }

    var newIncorrectLetter = [];
    if (incorrectLetter.length > 0) {
      for (var il = 0; il < incorrectLetter.length; il++) {
        incorrectPostion.forEach((element) => {
          if (element.rowIndex == incorrectLetter[il].rowIndex) {
            incorrectLetter.splice(il, 1);
          }
          return;
        });
      }
    }
    newIncorrectLetter = [...newIncorrectLetter, ...incorrectLetter];

    // console.log("removed");
    // console.log(newIncorrectLetter);

    var listOfData = [
      ...correctPosition,
      ...newIncorrectLetter,
      ...incorrectPostion,
    ];

    //sorting is done to correct the position of data according to rowIndex
    listOfData.sort((a, b) => (a.rowIndex > b.rowIndex ? 1 : -1));

    setCorrectPositions(listOfData);

    const isValidWord = wordList.filter((element) => {
      return element.toUpperCase().includes(guess.join(""));
    });
    if (!(isValidWord.length > 0)) {
      setResult("Word not found");
      return false;
    }
    // console.warn("isValidWord");
    // console.warn(isValidWord);

    return `${correctPosition}/${word.length} correct letters and positions`;
  };

  const handleKeyPress = (key) => {
    if (key === "enter") {
      const guessResult = handleGuess();
      if (guessResult && correctPositions != 0) {
        setGuess("");
        if (rowIndex === 4) {
          setRowIndex(-1);
          setColIndex(colIndex + 1);
          setCompletedPosition([...compltedPositions, correctPositions]);
          setCorrectPosition(0);
          console.log("sorted completed");
          console.log(correctPositions);
          console.log("sorted positions");
          console.log(correctPositions);
        }
      } else if (colIndex === 6 && correctPosition.length == 0) {
        setResult("You are failed to guess the word");
      }
    } else if (key === "delete") {
      setGuess([...guess].slice(0, -1));
      var guessLength = [...guess].length;
      if (guessLength >= 0) {
        setRowIndex(guessLength - 1);
        setInputValue("");
      }
    } else {
      if (colIndex < 6 && rowIndex < 4) {
        setRowIndex(rowIndex + 1);
        setInputValue(key);
        setGuess([...guess, key]);
        setBackground("input-color");
      }
    }
  };

  return (
    <>
      <Heading />
      <center>
        <h3>Current word: {targetWord.toUpperCase()}</h3>
        {/* <span>Guessed word: {guess}</span> */}
      </center>
      <Inputs
        rowIndx={rowIndex}
        colIndx={colIndex}
        inputValue={inputValue}
        background={background}
        listOfData={correctPositions}
      />
      <Result result={result} attemptsLeft={attemptsLeft} />
      <Keyboard onKeyPress={handleKeyPress} />
    </>
  );
};

export default Wordle;
