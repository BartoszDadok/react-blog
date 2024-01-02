import { Box, Stack, Typography, styled, useTheme } from "@mui/material";
import SocialItems from "../../molecules/SocialItems/SocialItems";
import FooterLink from "../../atoms/FooterLink/FooterLink";

function FooterSection() {
  const theme = useTheme();
  const FooterBox = styled(Box)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  });

  return (
    <Box sx={{ background: theme.palette.primary.main }}>
      <Stack
        display={"flex"}
        justifyContent={"center"}
        gap={{ xs: 5, md: 10 }}
        direction={{ xs: "column", md: "row" }}
        p={7}
      >
        <FooterBox>
          <FooterLink title={"Contact Us"} />
        </FooterBox>
        <FooterBox>
          <FooterLink title={"Data policy"} />
          <FooterLink title={"Cookies"} />
          <FooterLink title={"Data Safety"} />
        </FooterBox>
        <FooterBox>
          <Typography mb={"0.1em"} align={"center"}>
            Follow Us
          </Typography>
          <SocialItems />
        </FooterBox>
      </Stack>
    </Box>
  );
}

export default FooterSection;
