import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./AppLayout";
import Completed from "./Pages/Completed";
import Home from "./Pages/Home";
import Incompleted from "./Pages/Incompleted";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/completed",
          element: <Completed />,
        },
        {
          path: "/incomplete",
          element: <Incompleted />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
