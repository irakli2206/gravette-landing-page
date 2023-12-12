import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home";
import RootLayout from "../layouts/RootLayout";
import Contact from "../pages/Contact";



const router = createBrowserRouter([
  {

    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/contact",
        element: <Contact />
      },

    ]
  },
  // {
  //   path: "about",
  //   element: <div>About</div>,
  // },
]);
export default router