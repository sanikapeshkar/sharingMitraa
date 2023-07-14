import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {Home} from './pages/Home'
import Contact from "./pages/Contact"

import AboutUs from "./pages/AboutUs";
import Gallery from "./pages/Gallery";
import Blogs from "./pages/Blogs";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },

    {
      path: "/contact",
      element: <Contact/>,
    },
    {
      path: "/aboutus",
      element: <AboutUs/>,
    },
    {
      path: "/Gallery",
      element: <Gallery/>,
    },
    {
      path: "/Blogs",
      element: <Blogs/>,
    },
  ]);
  return (
<div className="app" style={{overflowX:"hidden"}}><RouterProvider router={router} /></div>
  );
}

export default App;
