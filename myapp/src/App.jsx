import React from 'react'
import LoginPage from './Login.jsx';
import RegisterPage from './Registration.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

function App() {
  return (
    <div>
  <RouterProvider router={router} />
    </div>
  )
}

export default App