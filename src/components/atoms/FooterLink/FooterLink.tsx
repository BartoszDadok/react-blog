import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { linksStyles } from "../../../styles/linkStyles";

function FooterLink({ title }: { title: string }) {
  return (
    <Link style={linksStyles.link} to='/'>
      <Typography align={"center"}>{title}</Typography>
    </Link>
  );
}

export default FooterLink;
