import { Box, CardMedia, Stack, Typography } from "@mui/material";
import { PostDetails } from "../../../types/types";
import { fakeAuthors } from "../../../utils/fakeAuthors";
import { findAuthorFullName } from "../../../utils/findAuthorFullName";
import { Photo } from "../../../store/api/types";

function SinglePostContent({
  postDetails,
  image,
}: {
  postDetails: PostDetails;
  image: Photo;
}) {
  const author = findAuthorFullName(fakeAuthors, postDetails.userId);
  return (
    <Stack
      width={{ xs: "100%", sm: "100%", md: "80%" }}
      sx={{ margin: "0 auto" }}
      direction={"column"}
      spacing={{ xs: 1, sm: 2, md: 4 }}
    >
      <Box
        flex={3}
        padding={{ xs: "0.5em", sm: "0.5em", md: "2em 8em 2em 8em" }}
      >
        <Typography
          variant='h6'
          display={"flex"}
          mb={"0.5em"}
          justifyContent={"center"}
        >
          Author: {author && author.name}
        </Typography>
        <CardMedia
          component='img'
          height='300px'
          image={image.url}
          alt={image.title}
        />

        <Typography
          mb={4}
          mt={4}
          color={"gray"}
          variant='body1'
          sx={{ fontWeight: 900 }}
        >
          {postDetails.body}
        </Typography>
        <Typography
          mt={4}
          color={"gray"}
          variant='body1'
          sx={{ fontWeight: 900 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
          laudantium voluptates quaerat, excepturi soluta quos repudiandae
          consequuntur? Magnam labore blanditiis enim, laborum atque nulla
          veniam impedit necessitatibus totam, sed quibusdam? Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Aut laudantium voluptates
          quaerat, excepturi soluta quos repudiandae consequuntur? Magnam labore
          blanditiis enim, laborum atque nulla veniam impedit necessitatibus
          totam, sed quibusdam? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Aut laudantium voluptates quaerat, excepturi soluta
          quos repudiandae consequuntur? Magnam labore blanditiis enim, laborum
          atque nulla veniam impedit necessitatibus totam, sed quibusdam?
        </Typography>
      </Box>
    </Stack>
  );
}

export default SinglePostContent;
