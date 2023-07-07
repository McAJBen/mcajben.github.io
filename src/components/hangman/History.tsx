import classNames from "classnames";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GameState } from "../../clients/HangmanApi";
import "./History.css";

type Props = {
  gameState: GameState;
};

export default function History(props: Props) {
  const { gameState } = props;

  const navigate = useNavigate();
  const [isLinkCopied, setIsLinkCopied] = useState(false);

  const onShare = useCallback(async () => {
    await navigator.clipboard.writeText(
      `${window.location.origin}/hangman/${gameState.game_id}`
    );
    setIsLinkCopied(true);
  }, [gameState]);

  const onRestart = useCallback(() => {
    navigate("/hangman");
  }, [navigate]);

  return (
    <>
      <div className="hangman-history-description">{gameState.description}</div>
      <div className="hangman-history">
        {gameState.guesses.map(({ letter, is_correct }, index) => (
          <div
            key={index}
            className={classNames(
              "hangman-history-square",
              is_correct && "hangman-history-correct"
            )}
          >
            {letter}
          </div>
        ))}
      </div>
      <div className="hangman-history-options">
        <div onClick={onShare} className="hangman-history-option">
          {isLinkCopied ? "Link Copied!" : "Share"}
        </div>
        <div onClick={onRestart} className="hangman-history-option">
          Play again
        </div>
      </div>
    </>
  );
}
