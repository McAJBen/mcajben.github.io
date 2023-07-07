import { Time } from "../../clients/HangmanApi";
import { useMsRemaining } from "../../hooks/Hooks";
import "./Timer.css";

type Props = {
  expirationTime: Time;
};

export default function Timer(props: Props) {
  const { expirationTime } = props;

  const msRemaining = useMsRemaining(expirationTime);

  return (
    <div className="hangman-timer">
      {new Date(msRemaining).toISOString().substring(14, 21)}
    </div>
  );
}
