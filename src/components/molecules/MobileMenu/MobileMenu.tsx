import { Box, styled } from "@mui/material";
import { SetOpen } from "../../../types/types";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { linksStyles } from "../../../styles/linkStyles";
import Drawer from "@mui/material/Drawer";

function MobileMenu({
  open,
  setOpen,
  MenuLinks,
}: {
  open: boolean;
  setOpen: SetOpen;
  MenuLinks: {
    Name: string;
    Link: string;
  }[];
}) {
  const MenuMobileBox = styled(Box)({
    display: "flex",
    flexDirection: "column",
    gap: 20,
  });

  return (
    <Drawer anchor={"top"} open={open} onClose={() => setOpen((prev) => !prev)}>
      <MenuMobileBox sx={{ width: 350, padding: "1em" }}>
        {MenuLinks.map((menuItem) => (
          <Link
            key={uuidv4()}
            to={menuItem.Link}
            style={linksStyles.mobileLink}
          >
            {menuItem.Name}
          </Link>
        ))}
      </MenuMobileBox>
    </Drawer>
  );
}

export default MobileMenu;
