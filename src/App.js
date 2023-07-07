import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {Home} from './pages/Home'
import {Login} from './pages/Login'
import {Register} from './pages/Register'

import AboutUs from "./pages/AboutUs";
import Gallery from "./pages/Gallery";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/Login",
      element: <Login/>,
    },
    {
      path: "/Register",
      element: <Register/>,
    },
    {
      path: "/aboutus",
      element: <AboutUs/>,
    },
    {
      path: "/Gallery",
      element: <Gallery/>,
    },
  ]);
  return (
<div className="app" style={{overflowX:"hidden"}}><RouterProvider router={router} /></div>
  );
}

export default App;
