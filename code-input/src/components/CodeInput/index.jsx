import React, { useEffect, useRef, useState } from "react";
import * as S from "./styles";

export default function CodeInput() {
  const [code, setCode] = useState([]);
  const [inputCode, setInputCode] = useState("");

  useEffect(() => {
    console.log(code);
  }, [code]);

  const firstInpurt = useRef("");
  const secondInpurt = useRef("");
  const thirdInpurt = useRef("");
  const fourthInpurt = useRef("");

  const inputsRefs = {
    0: firstInpurt,
    1: secondInpurt,
    2: thirdInpurt,
    3: fourthInpurt,
  };

  const handleInput = (event, index) => {
    const codeInput = [...code];
    if (event.target.value.length > 1) {
    }
    codeInput.splice(index, 1, event.target.value);
    setCode(codeInput);

    if (index === 3) {
      inputsRefs[index].current.focus();
    } else {
      inputsRefs[index + 1].current.focus();
    }
  };

  return (
    <>
      {Array(4)
        .fill("")
        .map((element, index) => (
          <input
            type="text"
            ref={inputsRefs[index]}
            style={{
              background: "#ef3f3f",
              color: "#000",
              width: "150px",
              height: "50px",
              margin: "8px",
              maxLength: "1",
            }}
            value={code[index]}
            onChange={(event) => handleInput(event, index)}
          />
        ))}
    </>
  );
}
