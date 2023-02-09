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
import USERORDERHISTORY from "../pages/MyAccountPage/UserOrderHistoryPage/UserOrderHistory";
import Productlist from "../pages/Productlistpage/Productlist";
import Admin from "../pages/AdminPage/Admin";
import UserOrderedDetail from "../pages/MyAccountPage/UserOrderHistoryPage/UserOrderedDetailPage/UserOrderedDetail";
import Orderlist from "../pages/Orderlistpage/Orderlist";

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
    path: "/account/delete",
    link: "/account/delete",
    element: DeleteAccount,
  },
  CART: {
    path: "/cart",
    link: "/cart",
    element: Cart,
  },
  PRODUCTADD: {
    path: "/admin/product/add",
    link: "/admin/product/add",
    element: Productadd,
  },
  PRODUCTEDIT: {
    path: "/admin/product/edit",
    link: "/admin/product/edit",
    element: Productedit,
  },
  ORDER: {
    path: "/order/:id",
    link: "/order/:id",
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
    path: "/admin/category/manage",
    link: "/admin/category/manage",
    element: CategoryManage,
  },
  MYACCOUNT: {
    path: "/myaccount",
    link: "/myaccount",
    element: MyAccount,
  },
  MYDETIALS: {
    path: "/myaccount/detail",
    link: "/myaccount/detail",
    element: MyDetails,
  },
  USERORDERHISTORY: {
    path: "/myaccount/order",
    link: "/myaccount/order",
    element: USERORDERHISTORY,
  },
  USERORDEREDDETAIL: {
    path: "/myaccount/order/detail/:id",
    link: "/myaccount/order/detail/",
    element: UserOrderedDetail,
  },
  PRODUCTLIST: {
    path: "/admin/product/list",
    link: "/admin/product/list",
    element: Productlist,
  },
  ADMIN: {
    path: "/admin",
    link: "/admin",
    element: Admin,
  },
  Orderlist: {
    path: "/orderlist",
    link: "/orderlist",
    element: Orderlist,
  },
};

export const ROUTE_ARR = Object.values(ROUTE);
