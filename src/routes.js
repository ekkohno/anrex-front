import { createBrowserRouter } from "react-router-dom";
import Shop from "./Shop";
import ShopApplicationWrapper from "./pages/ShopApplicationWrapper";
import ProductListPage from "./pages/ProductListPage/ProductListPage";
import ProductDetails from "./pages/ProductDetailPage/ProductDetails";
import { loadProductById } from "./routes/products";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <ShopApplicationWrapper />,
      children:[
        {
            path:"/",
            element:<Shop />
        },
        {
            path:"/soft",
            element:<ProductListPage categoryType={'SOFT'}/>,
        },
        {
          path:"/kithen",
          element:<ProductListPage categoryType={'KITCHEN'}/>,
        },
        {
          path:"/cab",
          element:<ProductListPage categoryType={'CAB'}/>,
        },
        {
          path:"/product/:productId",
          loader: loadProductById,
          element: <ProductDetails />
        }
      ]
    }
  ]);