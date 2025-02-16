import {
    createBrowserRouter,
  } from "react-router-dom";

import LayOuts from "../LayOuts/LayOuts";
import Home from "../Pages/Home/Home";

// import Error from "../Pages/Error/Error";
;

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayOuts></LayOuts>,
      // errorElement: <Error></Error>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
    
      ]
    },
  ]);
  export default router;