import Cart from "../pages/CartPage/Cart";
import Login from "../pages/LoginPage/Login";
import Main from "../pages/MainPage/Main";
import DeleteAccount from "../pages/DeleteAccountPage/DeleteAccount";
import Productadd from "../pages/Productaddpage/Productadd";
import Productedit from "../pages/Producteditpage/Productedit";
import Order from "../pages/OrderPage/Order/Order";
import Product from "../pages/ProductPage/ProductList/ProductList";
import ProductDetail from "../pages/ProductPage/ProductDetail/ProductDetail";
import Signup from "../pages/SignupPage/Signup";
import CategoryManage from "../pages/AdminPage/CategoryManagePage/CategoryManage";
import MyAccount from "../pages/MyAccountPage/MyAccount";
import MyDetails from "../pages/MyAccountPage/MyDetailsPage/MyDetails";
import OrderHistory from "../pages/MyAccountPage/OrderHistoryPage/OrderHistory";
import Productlist from "../pages/Productlistpage/Productlist";
import Admin from "../pages/AdminPage/Admin";

export const ROUTE = {
  HOME: {
    path: "/",
    link: "/",
    element: Main,
  },
  LOGIN: {
    path: "/login",
    link: "/login",
    element: Login,
  },
  REGISTER: {
    path: "/signup",
    link: "/signup",
    element: Signup,
  },
  DELETEACCOUNT: {
    path: "/deleteaccount",
    link: "/deleteaccount",
    element: DeleteAccount,
  },
  CART: {
    path: "/cart",
    link: "/cart",
    element: Cart,

  },
  PRODUCTADD: {
    path: "/productadd",
    link: "/productadd",
    element: Productadd,
  },
  PRODUCTEDIT: {
    path: "/productedit",
    link: "/productedit",
    element: Productedit,
  },
  ORDER: {
    path: "/order",
    link: "/order",
    element: Order,
  },
  PRODUCT: {
    path: "/product/:category",
    link: "/product/:category",
    element: Product,
  },
  PRODUCTDETAIL: {
    path: "/product/detail/:id",
    link: "/product/detail/:id",
    element: ProductDetail,
  },
  CategoryManage: {
    path: "/admin/categorymanage",
    link: "/admin/categorymanage",
    element: CategoryManage,
  },
  MyAccount: {
    path: "/myaccount",
    link: "/myaccount",
    element: MyAccount,
  },
  MyDetails: {
    path: "/myaccount/mydetails",
    link: "/myaccount/mydetails",
    element: MyDetails,
  },
  OrderHistory: {
    path: "/myaccount/orderhistory",
    link: "/myaccount/orderhistory",
    element: OrderHistory,
  },
  Productlist: {
    path: "/productlist",
    link: "/productlist",
    element: Productlist,
  },
  Admin: {
    path: "/admin",
    link: "/admin",
    element: Admin,
  },
};

export const ROUTE_ARR = Object.values(ROUTE);
