import { Box, Typography } from "@mui/material";
import Comment from "../../molecules/Comment/Comment";
import { useGetCommentsQuery } from "../../../store/api/api";
import { Params, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Loading from "../../molecules/Loading/Loading";
import Error from "../../molecules/Error/Error";

interface QueryParamTypes extends Params {
  postId: string;
}

function Comments() {
  const { postId } = useParams() as QueryParamTypes;

  const { data, isLoading, isSuccess, isError, refetch } = useGetCommentsQuery(
    +postId
  );
  const dataIsAvailable = isSuccess && data && data.length > 0;

  if (isLoading) {
    return <Loading title={"Loading comments..."} />;
  }
  if (isError) {
    return (
      <Error
        title='Something went wrong with fetching comments. Try again in a moment!'
        refetch={refetch}
      />
    );
  }
  return (
    <Box
      margin={"0 auto"}
      width={{ xs: "100%", sm: "100%", md: "80%" }}
      padding={{ xs: "0em", sm: "0em", md: "0 8em 2em 8em" }}
    >
      <Typography fontWeight={500} mb={"1em"} variant='h5'>
        Comments
      </Typography>

      {dataIsAvailable &&
        data.map((commentData) => (
          <Comment key={uuidv4()} commentData={commentData} />
        ))}
    </Box>
  );
}

export default Comments;
