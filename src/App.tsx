import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "./components/browse/Browse";
import Login from "./components/Login";
import Details from "./components/Details";
import GPTSearch from "./components/gptMovieSuggestions/GptSearch";
import Home from "./components/Home";
import { BROWSE_ROUTE, DETAILS_ROUTE, GPT_ROUTE } from "./utils/constants";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

function App() {
  const user = useSelector((store: RootState) => store.user);
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/",
          element: user && user.uid ? <Browse /> : <Login />,
        },
        {
          path: BROWSE_ROUTE,
          element: <Browse />,
        },
        {
          path: GPT_ROUTE,
          element: <GPTSearch />,
        },
        {
          path: `${DETAILS_ROUTE}/:id`,
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
