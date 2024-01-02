import { Avatar, Grid, Paper, Typography } from "@mui/material";
import { CommentTypes } from "../../../store/api/types";
import { getRandomNumberBetween } from "../../../utils/getRandomNumberBetween";

function Comment({ commentData }: { commentData: CommentTypes }) {
  const randomNumber = getRandomNumberBetween(1, 110);

  return (
    <Paper style={{ padding: "2em", marginBottom: "2em" }}>
      <Grid container wrap='nowrap' spacing={2}>
        <Grid item>
          <Avatar />
        </Grid>
        <Grid justifyContent='left' item xs zeroMinWidth>
          <Typography fontWeight={500} style={{ margin: 0, textAlign: "left" }}>
            {commentData.name}
          </Typography>
          <Typography mt={"0.2em"} style={{ textAlign: "left" }}>
            {commentData.body}
          </Typography>
          <Typography style={{ textAlign: "left", color: "gray" }} mt={"0.5em"}>
            {`posted ${randomNumber} minute ago`}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Comment;
