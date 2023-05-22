import Main from "../LayOut/Main/Main";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import LoginLayout from "../LayOut/LoginLayout/LoginLayout";
import AllToy from "../Pages/AllToy/AllToy";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";
import Blog from "../Pages/Blog/Blog";
import AddToy from "../Pages/AddToy/AddToy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    //   errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/:id",
        element: <ToyDetails></ToyDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/${params.id}`),
      },

      {
        path: "/alltoys",
        element: <AllToy></AllToy>,
      },
      {
        path: "/blogs",
        element: <Blog></Blog>,
      },
      {
        path: "/addtoy",
        element: <AddToy></AddToy>,
      },
    ],
  },
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
    ],
  },
]);

export default router;
