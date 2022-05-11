import "./App.css";
import Routes from "./Routes";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import { Toaster } from "react-hot-toast";
function App() {
  if (process.env.NODE_ENV === "production") {
    window.console.log = () => {};
    window.console.info = () => {};
    window.console.error = () => {};
    window.console.warn = () => {};
  }
  return (
    <div className="App">
      <Provider store={store}>
        <Toaster />
        <Routes />
      </Provider>
    </div>
  );
}

export default App;
