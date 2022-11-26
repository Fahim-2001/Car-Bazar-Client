import { RouterProvider } from "react-router-dom";
import routes from "./Routes/Routes";
import "./App.css";
import Spinner from "./Spinner/Spinner";

function App() {
  return (
    <div className="App" data-theme="corporate">
      <RouterProvider
        router={routes}
        fallbackElement={<Spinner></Spinner>}
      ></RouterProvider>
    </div>
  );
}

export default App;
