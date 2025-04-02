import { Toaster } from "react-hot-toast";
import { useEffect } from "react";

import { Routes, Route, Navigate } from "react-router";
import { Home, Login, PageNotFound, Signup } from "./pages";
import { ProtectedRoutes } from "./components";
import { useAuthStore } from "./store/useAuthStore";

const App = () => {
  const { checkAuth, authUser, isCheackingAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheackingAuth)
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );

  return (
    <div className="w-screen h-screen overflow-hidden bg-base-100">
      <Routes>
        <Route
          path="/login"
          element={!authUser ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/signup"
          element={!authUser ? <Signup /> : <Navigate to="/" />}
        />

        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Toaster position="top-center" />
    </div>
  );
};

export default App;
