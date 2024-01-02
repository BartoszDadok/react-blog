import { AppBar, styled, Toolbar } from "@mui/material";
import { useState } from "react";
import SocialItems from "../../molecules/SocialItems/SocialItems";
import Logo from "../../atoms/Logo/Logo";
import MenuItems from "../../molecules/MenuItems/MenuItems";
import HamburgerIcon from "../../atoms/HamburgerIcon/HamburgerIcon";
import MobileMenu from "../../molecules/MobileMenu/MobileMenu";

function NavigationBar() {
  const [open, setOpen] = useState(false);

  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    padding: 10,
  });

  const MenuLinks = [
    { Name: "Home", Link: "/" },
    { Name: "Products", Link: "/" },
    { Name: "Contact us", Link: "/" },
  ];

  return (
    <AppBar elevation={0} sx={{ background: "primary" }} position={"sticky"}>
      <StyledToolbar>
        <Logo />
        <MenuItems MenuLinks={MenuLinks} />
        <SocialItems />
        <HamburgerIcon setOpen={setOpen} />
      </StyledToolbar>
      <MobileMenu setOpen={setOpen} open={open} MenuLinks={MenuLinks} />
    </AppBar>
  );
}

export default NavigationBar;
