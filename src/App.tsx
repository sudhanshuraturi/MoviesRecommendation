import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "./components/browse/Browse";
import Login from "./components/Login";
import Details from "./components/Details";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/details",
      element: <Details />,
    },
    {
      path: "*",
      element: <Browse />,
    },
  ]);
  return <RouterProvider router={appRouter} />;
}

export default App;
