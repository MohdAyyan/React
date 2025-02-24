import { createBrowserRouter } from "react-router-dom";
import Setup2FA from "./pages/Setup2FA";
import ErrorPage from "./pages/Error";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import VerifyPage from "./pages/Verify2FA";
import ProtectedRoute from "./components/ProtectedRoute";


export const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/setup",
        element: <Setup2FA />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/verify",
        element: <VerifyPage />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);
