import { Box, styled, Typography } from "@mui/material";
import { linksStyles } from "../../../styles/linkStyles";
import { Link } from "react-router-dom";

function Logo() {
  const LogoBox = styled(Box)({
    display: "flex",
    gap: 10,
  });
  return (
    <LogoBox>
      <Link to='/' style={linksStyles.link}>
        <Typography letterSpacing={1.5}>REACT BLOG</Typography>
      </Link>
    </LogoBox>
  );
}

export default Logo;
