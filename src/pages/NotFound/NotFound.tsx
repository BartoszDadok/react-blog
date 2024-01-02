import { Box, Typography } from "@mui/material";

function NotFound() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      height={"40em"}
      alignItems={"center"}
      mt={5}
    >
      <Typography mt={2}>Page not found</Typography>
    </Box>
  );
}

export default NotFound;
