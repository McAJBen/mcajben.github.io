import classNames from "classnames";

type Props = {
  answer: string;
};

export default function Answer(props: Props) {
  const { answer } = props;

  return (
    <div className="margin-2.5 flex w-full max-w-lg select-none gap-1.5 whitespace-pre text-xl font-bold uppercase">
      {answer.split("").map((letter, index) => {
        const isCorrect = letter !== "_";
        return (
          <div
            key={index}
            className={classNames(
              "inline-flex aspect-square w-full content-center items-center justify-center rounded",

              isCorrect ? "bg-success" : "bg-primary-100",
            )}
          >
            <div className="text-center">{isCorrect ? letter : " "}</div>
          </div>
        );
      })}
    </div>
  );
}
