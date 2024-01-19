import React, { useRef } from "react";

export default function Answers({
  answers,
  selectedAnswer,
  answerState,
  onSelect,
}) {
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        const isSlected = selectedAnswer === answer;
        let cssClass = "";

        if (answerState === "answered" && isSlected) {
          cssClass = "selected";
        }
        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSlected
        ) {
          cssClass = answerState;
        }

        return (
          <li key={answer} className="answer">
            <button onClick={() => onSelect(answer)} className={cssClass}>
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
