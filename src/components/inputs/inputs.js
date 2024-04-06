import React, { useEffect, useState } from "react";
import "./index.css";

const Inputs = ({
  rowIndx,
  colIndx,
  inputValue,
  background,
  listOfData = [],
}) => {
  //made 6 x 5 matrix values
  const [inputValues, setInputValues] = useState(
    Array(5).fill(Array(6).fill(""))
  );

  const [compltedPositions, setCompletedPosition] = useState([]);

  const handleInputChange = (rowIndex, colIndex, value, listOfData) => {
    // if (listOfData.length > 0) {
    //   console.log("hello list of datt");
    //   // var colIndx = colIndex + 1;
    //   // const newInputValues = Array(5).fill(Array(6 - 1).fill(""));
    //   // setInputValues(newInputValues);

    //   // const newInputValues = inputValues.map((row, rIndex) => {
    //   //   listOfData.length > 0 &&
    //   //     listOfData.map((value) => {
    //   //       if (rIndex === rowIndex) {
    //   //         return row.map((col, cIndex) => {
    //   //           if (cIndex != colIndex) {
    //   //             return "";
    //   //           }
    //   //           return col;
    //   //         });
    //   //       }
    //   //     });

    //   //   return row;
    //   // });
    //   // setInputValues(newInputValues);
    // } else {
    const newInputValues = inputValues.map((row, rIndex) => {
      if (rIndex === rowIndex) {
        return row.map((col, cIndex) => {
          if (cIndex === colIndex) {
            return value;
          }
          return col;
        });
      }
      return row;
    });
    setInputValues(newInputValues);
    // }
  };

  useEffect(() => {
    handleInputChange(rowIndx, colIndx, inputValue, listOfData);
    if (listOfData.length > 0) {
      // setCompletedPosition([...compltedPositions, listOfData]);
      // console.log("sorted completed");
      // console.log(compltedPositions);
    }
  }, [rowIndx, colIndx, inputValue, background, listOfData]);

  return (
    <>
      <div className="check-corrects">
        {listOfData.length > 0 &&
          listOfData.map((value) => {
            return (
              <div className={`input-field ${value.background}`}>
                <p className="text">{value.letter}</p>
              </div>
            );
          })}
      </div>
      <div className="inputs">
        {/* {listOfData.length > 0 &&
        inputValues.map((row, rowIndex) => (
          <div key={rowIndex} className="input-row">
            {row.map((value, colIndex) => {
              {
                return listOfData.map((value) => {
                  if (colIndex === value.colIndex)
                    return (
                      <div
                        className={`input-field ${
                          rowIndex == value.rowIndex &&
                          colIndex == value.colIndex
                            ? value.background
                            : ""
                        }`}
                      >
                        <p className="text">{value.letter}</p>
                      </div>
                    );
                });
              }
            })}
          </div>
        ))} */}
        {/* <div className="check-corrects">
          {listOfData.length > 0 &&
            listOfData.map((value) => {
              return (
                <div className={`input-field ${value.background}`}>
                  <p className="text">{value.letter}</p>
                </div>
              );
            })}
        </div> */}
        {/* <div className="check-corrects">
        {listOfData.length > 0 &&
          listOfData.map((row, rowIndex) => {
            {
              <div key={rowIndex} className="input-row">
                {row.map((value, colIndex) => {
                  console.log("row " + rowIndex + " col " + colIndex);
                  console.log(value);
                  return (
                    <div
                      key={colIndex}
                      className={`input-field ${value.background}`}
                    >
                      <p className="text">{value.letter}</p>
                    </div>
                  );
                })}
              </div>;
            }
          })}
      </div> */}
        {inputValues.map((row, rowIndex) => (
          <div key={rowIndex} className="input-row">
            {row.map((value, colIndex) => {
              {
                /* console.log(value); */
              }
              {
                /* if (colIndex == colIndx)
              if (listOfData.length > 0) {
                listOfData.length > 0 &&
                  listOfData.map((value) => {
                    return (
                      <div
                        key={colIndex}
                        className={`input-field ${value.background}`}
                      >
                        <p className="text">{value.letter}</p>
                      </div>
                    );
                  });
              } */
              }

              return (
                <div
                  key={colIndex}
                  className={`input-field ${
                    rowIndex == rowIndx && colIndex == colIndx ? background : ""
                  }`}
                >
                  <p className="text">{value}</p>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </>
  );
};

export default Inputs;
