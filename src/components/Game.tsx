import { Button } from "@mui/material";
import { FormEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  onGameEnd: (score: number) => void;
}

export const Game = ({ onGameEnd }: Props) => {
  const navigate = useNavigate();
  const [stillPlaying, setStillPlaying] = useState(true);
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  let api = {
    question: "Select animals",
    allwords: [
      "hole",
      "sofa",
      "pear",
      "tiger",
      "oatmeal",
      "square",
      "nut",
      "cub",
      "shirt",
      "tub",
      "cow",
    ],
    goodwords: ["tiger", "cow"],
  };

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    if (stillPlaying) {
      setStillPlaying(false);
      return;
    }
    const numberOfSelected = selectedWords.length;
    const numberOfSelectedCorrect = api.goodwords.filter((word) =>
      selectedWords.includes(word)
    ).length;
    const totalCorrect = api.goodwords.length;
    const missedCorrect = totalCorrect - numberOfSelectedCorrect;
    const incorrect = numberOfSelected - numberOfSelectedCorrect;
    const score = numberOfSelectedCorrect * 2 - (missedCorrect + incorrect);
    onGameEnd(score);
    navigate("/results");
  };

  const removeWord = (word: string) => {
    setSelectedWords((oldWords) => {
      return oldWords.filter((oldWord) => {
        return oldWord !== word;
      });
    });
  };

  const addWord = (word: string) => {
    setSelectedWords((oldWords) => [...oldWords, word]);
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h2>{api.question}</h2>
          <div className="container-cloud">
            <ul>
              {api.allwords.map((word) => {
                const checked = selectedWords.includes(word);
                let className;
                if (checked) {
                  if (stillPlaying) {
                    className = "selected";
                  } else {
                    className = api.goodwords.includes(word)
                      ? "correct"
                      : "incorrect";
                  }
                }
                return (
                  <li key={word} className={className}>
                    <input
                      type="checkbox"
                      id={word}
                      checked={checked}
                      onChange={() => {
                        if (checked) {
                          removeWord(word);
                        } else {
                          addWord(word);
                        }
                      }}
                    />
                    <label htmlFor={word}>
                      {word}
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
          <Button variant="outlined" type="submit">
            {stillPlaying ? "Check answers" : "Finish game"}
          </Button>
        </form>
      </div>
    </>
  );
};
