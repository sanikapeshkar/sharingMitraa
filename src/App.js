import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {Home} from './pages/Home'
import {Login} from './pages/Login'
import {Register} from './pages/Register'
import "."
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
  ]);
  return (
<div className="app" style={{overflowX:"hidden"}}><RouterProvider router={router} /></div>
  );
}

export default App;
