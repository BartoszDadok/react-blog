import HeroAnimation from "../../atoms/HeroAnimation/HeroAnimation";
import { Box, styled, useTheme } from "@mui/material";
import HeroContent from "../../molecules/HeroContent.tsx/HeroContent";

function HeroSection() {
  const theme = useTheme();

  const HeroSectionBox = styled(Box)({
    maxWidth: "100%",
    display: "grid",
    padding: "0px 10%",
    gap: "0px 2em",
    gridTemplateColumns: "1.2fr 1fr",
    backgroundColor: theme.palette.primary.main,
    paddingBottom: "2em",
  });

  return (
    <HeroSectionBox
      data-testid='heroSection'
      sx={{ gridTemplateColumns: { xs: "1fr", sm: "1fr", md: "1.2fr 1fr" } }}
    >
      <HeroAnimation />
      <HeroContent />
    </HeroSectionBox>
  );
}

export default HeroSection;
