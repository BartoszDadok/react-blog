import SinglePost from "../../components/organisms/SinglePost/SinglePost";
import { useParams, Params } from "react-router-dom";
import { useGetPostQuery, useGetPhotoQuery } from "../../store/api/api";
import Loading from "../../components/molecules/Loading/Loading";
import Error from "../../components/molecules/Error/Error";

interface QueryParamTypes extends Params {
  postId: string;
}

function Post() {
  const { postId } = useParams() as QueryParamTypes;

  const { data, isLoading, isSuccess, isError, refetch } =
    useGetPostQuery(postId);

  const {
    data: dataPhoto,
    isLoading: isLoadingPhoto,
    isSuccess: isSuccessPhoto,
    isError: isErrorPhoto,
    refetch: refetchPhoto,
  } = useGetPhotoQuery(postId);

  if (isLoading || isLoadingPhoto) {
    return <Loading title={"Loading article..."} />;
  }

  if (isError) {
    return (
      <Error
        title='Something went wrong with fetching post`s data. Try again in a moment!'
        refetch={refetch}
      />
    );
  }
  if (isErrorPhoto) {
    return (
      <Error
        title='Something went wrong with fetching post`s image. Try again in a moment!'
        refetch={refetchPhoto}
      />
    );
  }
  return (
    <>
      {isSuccess && data && isSuccessPhoto && dataPhoto && (
        <SinglePost postDetails={data} image={dataPhoto} />
      )}
    </>
  );
}

export default Post;
