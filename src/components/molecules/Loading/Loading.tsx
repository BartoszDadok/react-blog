import { Box, CircularProgress, Typography } from "@mui/material";

function Loading({ title }: { title: string }) {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      height={"80em"}
      alignItems={"center"}
      mt={5}
    >
      <CircularProgress />
      <Typography mt={2}>{title}</Typography>
    </Box>
  );
}

export default Loading;
