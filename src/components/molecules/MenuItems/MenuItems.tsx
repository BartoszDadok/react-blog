import { Box, styled } from "@mui/material";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { linksStyles } from "../../../styles/linkStyles";

function MenuItems({
  MenuLinks,
}: {
  MenuLinks: {
    Name: string;
    Link: string;
  }[];
}) {
  const MenuBox = styled(Box)({
    display: "flex",
    gap: 20,
  });

  return (
    <MenuBox sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
      {MenuLinks.map((menuItem) => (
        <Link key={uuidv4()} to={menuItem.Link} style={linksStyles.hoverLink}>
          {menuItem.Name}
        </Link>
      ))}
    </MenuBox>
  );
}

export default MenuItems;
