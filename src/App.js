import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddUsers from "./components/AddUsers/AddUsers";
import Home from "./components/Home/Home";
import Update from "./components/Update/Update";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      loader: () => {
        return fetch("http://localhost:5000/users");
      },
    },
    {
      path: "/adduser",
      element: <AddUsers></AddUsers>,
    },
    {
      path: "/update/:id",
      element: <Update></Update>,
      loader: ({ params }) => fetch(`http://localhost:5000/users/${params.id}`),
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      {/* <AddUsers></AddUsers> */}
    </div>
  );
}

export default App;
