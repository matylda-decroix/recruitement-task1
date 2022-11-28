import { Button, FormControl, TextField } from "@mui/material";

export const Start = () => {
  return (
    <>
      <h2>Worldcloud game</h2>
      <form>
        <FormControl>
          <TextField
            id="1"
            label="Enter your nickname here..."
            variant="outlined"
          />
          <Button variant="outlined" type="submit">
            play
          </Button>
        </FormControl>
      </form>
    </>
  );
};
