import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import StockData from "../Pages/StockData";
import UpdateStock from "../Pages/UpdateStock";
import AddStock from "../Pages/AddStock";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/stock",
        element: <StockData />,
      },
      {
        path: "/updateStock/:id",
        element: <UpdateStock />,
      },
      {
        path: "/addStock",
        element: <AddStock />,
      },
    ],
  },
]);

export default router;
