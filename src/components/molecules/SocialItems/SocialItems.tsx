import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box, styled } from "@mui/material";
import { Link } from "react-router-dom";
import { linksStyles } from "../../../styles/linkStyles";

function SocialItems() {
  const SocialBox = styled(Box)({
    display: "flex",
    gap: 10,
  });

  return (
    <SocialBox sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
      <Link to='/' style={linksStyles.link}>
        <Facebook />
      </Link>
      <Link to='/' style={linksStyles.link}>
        <Instagram />
      </Link>
      <Link to='/' style={linksStyles.link}>
        <Twitter />
      </Link>
    </SocialBox>
  );
}

export default SocialItems;
