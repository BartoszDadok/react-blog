import { useEffect, useRef, useState } from "react";
import { useGetPhotosQuery, useGetPostsQuery } from "../../../store/api/api";
import { useAppSelector } from "../../../store/hooks";
import { Container } from "@mui/material";
import { filterPostsByAuthor } from "../../../utils/filterPostsByAuthor";
import Loading from "../../molecules/Loading/Loading";
import Error from "../../molecules/Error/Error";
import MultiSelectAuthor from "../../atoms/MultiSelectAuthor/MultiSelectAuthor";
import Posts from "../../molecules/Posts/Posts";
import PaginationComponent from "../../molecules/PaginationComponent/PaginationComponent";
import { fakeAuthors } from "../../../utils/fakeAuthors";

function PostsSection() {
  const { filteringAuthorsIds } = useAppSelector((state) => state.posts);

  const { data, isLoading, isSuccess, isError, refetch } = useGetPostsQuery();

  const {
    data: dataPhotos,
    isLoading: isLoadingPhotos,
    isSuccess: isSuccessPhotos,
    isError: isErrorPhotos,
    refetch: refetchPhotos,
  } = useGetPhotosQuery();

  const postsContainer = useRef<null | HTMLDivElement>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const filteredPosts =
    isSuccess &&
    data &&
    data.length > 0 &&
    filteringAuthorsIds &&
    filteringAuthorsIds.length > 0
      ? filterPostsByAuthor(data, filteringAuthorsIds)
      : data;

  const postsToDisplay =
    filteredPosts &&
    filteredPosts.length > 0 &&
    filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const amountOfPages =
    filteredPosts &&
    filteredPosts.length > 0 &&
    Math.ceil(filteredPosts.length / postsPerPage);

  const scrollToTopPostsContainer = () => {
    if (postsContainer && postsContainer.current) {
      postsContainer.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const paginate = (p: number) => {
    setCurrentPage(p);
    scrollToTopPostsContainer();
  };

  const arePostsAndPhotosAvailable =
    isSuccess &&
    postsToDisplay &&
    postsToDisplay.length > 0 &&
    isSuccessPhotos &&
    dataPhotos &&
    dataPhotos.length > 0;

  useEffect(() => {
    setCurrentPage(1);
  }, [filteringAuthorsIds]);

  if (isLoading || isLoadingPhotos) {
    return <Loading title='Loading articles...' />;
  }

  if (isError) {
    return (
      <Error
        title={
          "Something went wrong with fetching posts. Try again in a moment!"
        }
        refetch={refetch}
      />
    );
  }
  if (isErrorPhotos) {
    return (
      <Error
        title={
          "Something went wrong with fetching images. Try again in a moment!"
        }
        refetch={refetchPhotos}
      />
    );
  }

  return (
    <Container
      id='posts'
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
      ref={postsContainer}
    >
      {arePostsAndPhotosAvailable && (
        <MultiSelectAuthor authors={fakeAuthors} />
      )}

      {arePostsAndPhotosAvailable && (
        <Posts postsToDisplay={postsToDisplay} dataPhotos={dataPhotos} />
      )}
      {arePostsAndPhotosAvailable && amountOfPages && (
        <PaginationComponent
          amountOfPages={amountOfPages}
          currentPage={currentPage}
          paginate={paginate}
        />
      )}
    </Container>
  );
}

export default PostsSection;
