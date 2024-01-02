import { Menu as MenuIcon } from "@mui/icons-material";
import { SetOpen } from "../../../types/types";

function HamburgerIcon({ setOpen }: { setOpen: SetOpen }) {
  return (
    <MenuIcon
      onClick={() => setOpen((prev) => !prev)}
      sx={{ display: { xs: "block", sm: "block", md: "none" } }}
    />
  );
}

export default HamburgerIcon;
