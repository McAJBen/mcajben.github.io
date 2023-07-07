import axios from "axios";

export const LETTERS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
] as const;

export type Letter = (typeof LETTERS)[number];

export type Time = string;

export type GameState = {
  game_id: string;
  user_name: string;
  answer: string;
  start_time: Time;
  expiration_time?: Time;
  description?: string;
  guesses: {
    letter: Letter;
    time: Time;
    is_correct: boolean;
  }[];
};

export type Leaderboard = {
  game_id: string;
  user_name: string;
  answer: string;
  total_time: number;
};

export default class HangmanApi {
  private static URL = "https://hangman-api.mcajben.com";

  public static async createGame(user_name: string) {
    try {
      const response = await axios.post<GameState>(`${this.URL}/game`, {
        user_name,
        time_limit: {
          type: "Cumulative",
          initial_ms: 60000,
          correct_guess_ms: 5000,
          wrong_guess_ms: -5000,
        },
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  public static async getGame(gameId: string) {
    try {
      const response = await axios.get<GameState>(`${this.URL}/game/${gameId}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  public static async createGuess(gameId: string, letter: string) {
    try {
      const response = await axios.post<GameState>(
        `${this.URL}/game/${gameId}/guess/${letter}`
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  public static async getLeaderboard() {
    try {
      const response = await axios.get<Leaderboard[]>(
        `${this.URL}/leaderboard`
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}
