import classNames from "classnames";

type Props = {
  answer: string;
};

export default function Answer(props: Props) {
  const { answer } = props;

  return (
    <div className="flex w-full max-w-lg gap-1.5 margin-2.5 uppercase text-xl whitespace-pre font-bold select-none">
      {answer.split("").map((letter, index) => {
        const isCorrect = letter !== "_";
        return (
          <div
            key={index}
            className={classNames(
              "rounded inline-flex justify-center content-center w-full aspect-square items-center",

              isCorrect
                ? "bg-[--color-text-success]"
                : "bg-[--color-primary-light]"
            )}
          >
            <div className="text-center">{isCorrect ? letter : " "}</div>
          </div>
        );
      })}
    </div>
  );
}
