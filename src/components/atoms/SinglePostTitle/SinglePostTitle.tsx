import { Typography } from "@mui/material";

function SinglePostTitle({ title }: { title: string }) {
  return (
    <Typography
      align='center'
      color={"black"}
      variant='h2'
      fontSize={{ xs: "2rem", sm: "2em", md: "3em" }}
      sx={{ fontWeight: 900 }}
      padding={{ xs: "1em 0", sm: "1em 0", md: "1em 5em" }}
    >
      {title}
    </Typography>
  );
}

export default SinglePostTitle;
