import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import AboutFoods from "../Pages/AbouFoods";
import RestLocations from "../Pages/RestornLocation";
import Carrer from "../Pages/Carrer";
import EmailPage from "../Pages/Emailpage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: (
          <>
            <Home />
          </>
        ),
      },
       {
      path:"/aboutfood",
      element: <AboutFoods/>
    },
    {
      path:"/locations",
      element: <RestLocations/>
    },
    {
      path:"/carrer",
      element: <Carrer/>
    },
    {
      path:"/email",
      element: <EmailPage/>
    }

    ],
  }, 
 
]);
