import { CssBaseline } from "@mui/material";
import FooterSection from "../../organisms/FooterSection/FooterSection";
import NavigationBar from "../../organisms/NavigationBar/NavigationBar";

interface Props {
  children: JSX.Element | JSX.Element[];
}

function MainTemplate({ children }: Props) {
  return (
    <>
      <CssBaseline />
      <NavigationBar />
      {children}
      <FooterSection />
    </>
  );
}

export default MainTemplate;
