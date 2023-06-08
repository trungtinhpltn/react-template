import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import Layout from "../components/Layout";
import Home from "../pages";
import AboutUs from "../pages/aboutus";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<Layout />}>
        <Route path="/" element={<Home/>} />
        <Route path="/about-us">
          <Route index element={<AboutUs />} />
        </Route>
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

export default router
