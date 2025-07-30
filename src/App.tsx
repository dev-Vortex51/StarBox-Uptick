import { Route, Routes } from "react-router";
import Login from "./pages/Login";
import Movies from "./pages/Movies";
import ProtectedRoute from "./routes/ProtectedRoute";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Routes>
      <Route
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }>
        <Route path='/' element={<Movies />} />
      </Route>

      <Route path='login' element={<Login />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default App;
