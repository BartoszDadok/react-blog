import { Box, Container } from "@mui/material";
import SinglePostTitle from "../../atoms/SinglePostTitle/SinglePostTitle";
import SinglePostContent from "../../molecules/SinglePostContent/SinglePostContent";
import { PostDetails } from "../../../types/types";
import { Photo } from "../../../store/api/types";
import Comments from "../Comments/Comments";

function SinglePost({
  postDetails,
  image,
}: {
  postDetails: PostDetails;
  image: Photo;
}) {
  return (
    <Box>
      <SinglePostTitle title={postDetails.title} />
      <Container>
        <hr />
        <SinglePostContent postDetails={postDetails} image={image} />
        <Comments />
      </Container>
    </Box>
  );
}

export default SinglePost;
