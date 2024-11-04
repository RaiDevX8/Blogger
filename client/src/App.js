"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const Register_1 = __importDefault(require("./pages/Register"));
const Login_1 = __importDefault(require("./pages/Login"));
const Write_1 = __importDefault(require("./pages/Write"));
const Home_1 = __importDefault(require("./pages/Home"));
const Single_1 = __importDefault(require("./pages/Single"));
const Navbar_1 = __importDefault(require("./components/Navbar"));
const Footer_1 = __importDefault(require("./components/Footer"));
require("./style.scss");
const Layout = () => {
    return (<>
      <Navbar_1.default />
      <react_router_dom_1.Outlet />
      <Footer_1.default />
    </>);
};
const router = (0, react_router_dom_1.createBrowserRouter)([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home_1.default />,
            },
            {
                path: '/post/:id',
                element: <Single_1.default />,
            },
            {
                path: '/write',
                element: <Write_1.default />,
            },
        ],
    },
    {
        path: '/register',
        element: <Register_1.default />,
    },
    {
        path: '/login',
        element: <Login_1.default />,
    },
]);
function App() {
    return (<div className="app">
      <div className="container">
        <react_router_dom_1.RouterProvider router={router}/>
      </div>
    </div>);
}
exports.default = App;
