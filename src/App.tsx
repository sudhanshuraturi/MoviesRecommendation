import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "./components/browse/Browse";
import Login from "./components/Login";
import Details from "./components/Details";
import GPTSearch from "./components/gptMovieSuggestions/GptSearch";
import Home from "./components/Home";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/",
          element: <Login />,
        },
        {
          path: "/browse",
          element: <Browse />,
        },
        {
          path: "/gpt",
          element: <GPTSearch />,
        },
        {
          path: "/details/:id",
          element: <Details />,
        },
        {
          path: "*",
          element: <Browse />,
        },
      ],
    },
  ]);
  return <RouterProvider router={appRouter} />;
}

export default App;
