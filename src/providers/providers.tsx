import { Provider } from "react-redux";
import { store } from "../store";
import { ThemeProvider } from "@mui/material";
import { theme } from "../theme/theme";

interface Props {
  children: JSX.Element;
}

function Providers({ children }: Props) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Provider>
  );
}

export default Providers;
