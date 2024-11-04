"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const AuthContext_1 = require("../context/AuthContext");
// import Logo from '../img/logo.png'
const Navbar = () => {
    const { currentUser, logout } = (0, react_1.useContext)(AuthContext_1.AuthContext);
    return (<div className="navbar">
      <div className="container">
        <div className="logo">
          <react_router_dom_1.Link to="/">
            {/* <img src={Logo} alt="" /> */}
            <h1>logo</h1>
          </react_router_dom_1.Link>
        </div>
        <div className="links">
          <react_router_dom_1.Link className="link" to="/?cat=art">
            <h6>ART</h6>
          </react_router_dom_1.Link>
          <react_router_dom_1.Link className="link" to="/?cat=science">
            <h6>SCIENCE</h6>
          </react_router_dom_1.Link>
          <react_router_dom_1.Link className="link" to="/?cat=technology">
            <h6>TECHNOLOGY</h6>
          </react_router_dom_1.Link>
          <react_router_dom_1.Link className="link" to="/?cat=cinema">
            <h6>CINEMA</h6>
          </react_router_dom_1.Link>
          <react_router_dom_1.Link className="link" to="/?cat=design">
            <h6>DESIGN</h6>
          </react_router_dom_1.Link>
          <react_router_dom_1.Link className="link" to="/?cat=food">
            <h6>FOOD</h6>
          </react_router_dom_1.Link>
          <span>{currentUser === null || currentUser === void 0 ? void 0 : currentUser.username}</span>
          {currentUser ? (<span onClick={logout}>Logout</span>) : (<react_router_dom_1.Link className="link" to="/login">
              Login
            </react_router_dom_1.Link>)}
          <span className="write">
            <react_router_dom_1.Link className="link" to="/write">
              Write
            </react_router_dom_1.Link>
          </span>
        </div>
      </div>
    </div>);
};
exports.default = Navbar;
