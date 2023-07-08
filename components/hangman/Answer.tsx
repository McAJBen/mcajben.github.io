import classNames from "classnames";
import styles from "./Answer.module.css";

type Props = {
  answer: string;
};

export default function Answer(props: Props) {
  const { answer } = props;

  return (
    <div className={styles.hangman_answer}>
      {answer.split("").map((letter, index) => {
        const isCorrect = letter !== "_";
        return (
          <div
            key={index}
            className={classNames(
              styles.hangman_answer_square,
              isCorrect && styles.hangman_answer_correct
            )}
          >
            <div className={styles.hangman_answer_letter}>
              {isCorrect ? letter : " "}
            </div>
          </div>
        );
      })}
    </div>
  );
}
