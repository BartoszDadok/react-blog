import { Button, Typography, styled, Box } from "@mui/material";

function HeroContent() {
  const ContentBox = styled(Box)({
    display: "flex",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  });
  return (
    <ContentBox>
      <Typography align='center' variant='h4'>
        Have a look at great content!
      </Typography>
      <Typography align='center' variant='body2'>
        React Demo Blog
      </Typography>
      <Button variant='contained' href='#posts' color='secondary'>
        Check our blog
      </Button>
    </ContentBox>
  );
}

export default HeroContent;
