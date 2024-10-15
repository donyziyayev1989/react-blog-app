import Header from "./components/Header";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import "./scss/main.scss";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  );
};

export default App;
