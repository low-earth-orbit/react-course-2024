import {
  createBrowserRouter,
  // createRoutesFromElements,
  // Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetailPage from "./pages/ProductDetail";
// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />,
//     <Route path="products" element={<ProductsPage />} />,
//   </Route>
// );

// const router = createBrowserRouter(routeDefinitions);

// The above code is equivalent to the following code:
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> }, // path: ''
      {
        path: "products", // This is relative path. The full path is "/products"
        element: <ProductsPage />,
      },
      { path: "products/:productId", element: <ProductDetailPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
