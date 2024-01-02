import {
  Box,
  Button,
  CardContent,
  CardMedia,
  Link,
  Typography,
  styled,
} from "@mui/material";
import { fakeAuthors } from "../../../utils/fakeAuthors";
import { Photo } from "../../../store/api/types";
import { findAuthorFullName } from "../../../utils/findAuthorFullName";

function Card({
  card,
  photo,
}: {
  card: {
    userId: number;
    id: number;
    title: string;
    body: string;
  };
  photo: Photo;
}) {
  const id = card.id;
  const CardContentNoPadding = styled(CardContent)(`
    padding: 0.3em 0;
  &:last-child {
    padding-bottom: 0;
  }
`);

  const author = findAuthorFullName(fakeAuthors, card.userId);

  return (
    <Box padding={"0.5em"}>
      <Link href={`post/${id}`} sx={{ textDecoration: "none" }}>
        <CardMedia
          sx={{ aspectRatio: "2/1.5" }}
          component='img'
          alt={photo.title}
          height='100%'
          loading='lazy'
          src={photo.url}
        />

        <CardContentNoPadding>
          <Typography gutterBottom variant='h5' component='div' color={"black"}>
            {card.title}
          </Typography>
          <Typography variant='body2' color='#525252'>
            {card.body}
          </Typography>
        </CardContentNoPadding>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "0.5em",
          }}
        >
          <Typography fontWeight={500} variant='body2' color='#000000'>
            Author: {author && author.name}
          </Typography>

          <Button size={"small"} variant='contained' color='secondary'>
            Read more
          </Button>
        </Box>
      </Link>
    </Box>
  );
}

export default Card;
