interface Props {
  nickname: string;
  result: number;
}

export const Results = ({ nickname, result }: Props) => {
  return (
    <>
      <div className="container">
        <h2>
          Congratulations, {nickname}! <br /> Your score:
        </h2>
        <h2 className="resultPoints">{result} points</h2>
      </div>
    </>
  );
};
