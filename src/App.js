import "./App.css";
import Routes from "./Routes";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import { Toaster } from "react-hot-toast";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function App() {
  if (process.env.NODE_ENV === "production") {
    window.console.log = () => {};
    window.console.info = () => {};
    window.console.error = () => {};
    window.console.warn = () => {};
  }
  let theme = createTheme({
    typography: {},
    palette: { primary: { main: "#0e406a", contrastText: "#fff" } },
  });
  return (
    <div className="App">
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Toaster />
          <Routes />
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
