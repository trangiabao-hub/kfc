import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./components/dashboard";
import ManageCategory from "./pages/admin/manage-category";
import ManageProduct from "./pages/admin/manage-product";
import ManageVoucher from "./pages/admin/manage-voucher";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { path: "", element: <Home /> },
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Register /> },
      ],
    },
    {
      path: "dashboard",
      element: <Dashboard />,
      children: [
        {
          path: "category",
          element: <ManageCategory />,
        },
        {
          path: "product",
          element: <ManageProduct />,
        },
        {
          path: "voucher",
          element: <ManageVoucher />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
