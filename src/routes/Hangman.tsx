import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import HangmanApi, { GameState } from "../clients/HangmanApi";
import Header from "../components/Header";
import Loading from "../components/Loading";
import Keyboard, { Key } from "../components/hangman/Keyboard";
import Answer from "../components/hangman/Answer";
import History from "../components/hangman/History";
import "./Hangman.css";
import Timer from "../components/hangman/Timer";
import { useIsExpired } from "../hooks/Hooks";

export default function Hangman() {
  const { gameId } = useParams();
  const navigate = useNavigate();
  const [gameState, setGameState] = useState<GameState>();

  const onLetterClick = useCallback(
    async (letter: string) => {
      if (!gameId) return;
      const response = await HangmanApi.createGuess(gameId, letter);
      if (response) {
        setGameState(response);
      }
    },
    [gameId]
  );

  const getKeyInfo = useCallback(
    (key: Key) => {
      if (!gameState) return { isEnabled: false, isCorrect: false };
      const guess = gameState.guesses.find((g) => g.letter === key);

      return {
        isEnabled: !guess,
        isCorrect: guess?.is_correct ?? false,
      };
    },
    [gameState]
  );

  const isExpired = useIsExpired(gameState?.expiration_time);

  useEffect(() => {
    if (!gameId) {
      navigate("/hangman");
      return;
    }
    const call = async () => {
      const response = await HangmanApi.getGame(gameId);
      setGameState(response);
    };
    call();
  }, [gameId, navigate]);

  if (!gameState || !gameId) {
    return (
      <>
        <Header />
        <Loading />
      </>
    );
  }

  const isGameWon = gameState.answer.indexOf("_") === -1;

  return (
    <>
      <Header />
      <div className="hangman-content">
        <Answer answer={gameState.answer} />
        {!isGameWon && isExpired && <div>You lost...</div>}
        {!isGameWon && !isExpired && gameState.expiration_time && (
          <Timer expirationTime={gameState.expiration_time} />
        )}
        {isGameWon || isExpired ? (
          <History gameState={gameState} />
        ) : (
          <Keyboard onClick={onLetterClick} getKeyInfo={getKeyInfo} />
        )}
      </div>
    </>
  );
}
