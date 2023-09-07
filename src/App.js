import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import DeviceTooSmall from "./pages/DeviceTooSmall.jsx";


const router = createBrowserRouter([
{
  path:"/",
  element:<Home/>
}
]);


function App() {
  const isDeviceTooSmall = window.innerWidth < 567;
  return (
    <div className="App">
       {isDeviceTooSmall ? (
          <DeviceTooSmall />
            ) : (
        <RouterProvider router={router}/>
            )}
    </div>
  );
}

export default App;
