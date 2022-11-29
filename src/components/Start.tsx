import { Button, FormControl, TextField } from "@mui/material";
import { FormEventHandler } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  onLogIn: (nick: string) => void;
}

export const Start = ({ onLogIn }: Props) => {
  const navigate = useNavigate();
  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    const target = event.target as unknown as {
      nick: HTMLInputElement;
    };
    const nick = target.nick.value;
    onLogIn(nick);
    navigate("/game");
  };

  return (
    <>
      <div className="container">
        <h2>Worldcloud game</h2>
        <form onSubmit={handleSubmit}>
          <FormControl>
            <TextField
              id="1"
              label="Enter your nickname here..."
              variant="outlined"
              name="nick"
            />
            <Button variant="outlined" type="submit">
              play
            </Button>
          </FormControl>
        </form>
      </div>
    </>
  );
};
