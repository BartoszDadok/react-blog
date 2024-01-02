import { Box, Button, Typography } from "@mui/material";
import { Refetch } from "../../../store/api/types";

function Error({ title, refetch }: { title: string; refetch: Refetch }) {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      height={"80em"}
      alignItems={"center"}
      mt={5}
    >
      <Typography mb={2}>{title}</Typography>
      <Button
        variant='contained'
        onClick={() => {
          refetch();
        }}
        color='secondary'
      >
        Try again!
      </Button>
    </Box>
  );
}

export default Error;
