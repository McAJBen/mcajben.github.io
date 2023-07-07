import classNames from "classnames";
import "./Answer.css";

type Props = {
  answer: string;
};

export default function Answer(props: Props) {
  const { answer } = props;

  return (
    <div className="hangman-answer">
      {answer.split("").map((letter, index) => {
        const isCorrect = letter !== "_";
        return (
          <div
            key={index}
            className={classNames(
              "hangman-answer-square",
              isCorrect && "hangman-answer-correct"
            )}
          >
            <div className="hangman-answer-letter">
              {isCorrect ? letter : " "}
            </div>
          </div>
        );
      })}
    </div>
  );
}
