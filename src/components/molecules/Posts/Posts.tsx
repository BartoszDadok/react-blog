import { Box, Grid, Stack } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { Photo, Post } from "../../../store/api/types";
import Card from "../Card/Card";

function Posts({
  postsToDisplay,
  dataPhotos,
}: {
  postsToDisplay: Post[];
  dataPhotos: Photo[];
}) {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      spacing={{ xs: 1, sm: 2, md: 8 }}
      mt={1}
    >
      <Box flex={3} padding={{ xs: "0.2em", sm: "0.2em", md: "0em 8em 0 8em" }}>
        <Box>
          <Grid
            container
            rowSpacing={5}
            columnSpacing={{ xs: 1, sm: 2, md: 1 }}
          >
            {postsToDisplay.map((card) => {
              const photo = dataPhotos[card.id - 1];
              return (
                <Grid key={uuidv4()} item md={6} xs={12}>
                  <Card card={card} photo={photo} />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </Stack>
  );
}

export default Posts;
