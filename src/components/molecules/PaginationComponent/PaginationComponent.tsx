import { Box, Pagination } from "@mui/material";

function PaginationComponent({
  amountOfPages,
  currentPage,
  paginate,
}: {
  amountOfPages: number;
  currentPage: number;
  paginate: (p: number) => void;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "5em",
        marginTop: "2em",
      }}
    >
      <Pagination
        count={amountOfPages}
        page={currentPage}
        onChange={(_, p) => paginate(p)}
      />
    </Box>
  );
}

export default PaginationComponent;
