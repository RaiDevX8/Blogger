"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthContextProvider = exports.AuthContext = void 0;
const axios_1 = __importDefault(require("axios"));
const react_1 = require("react");
axios_1.default.defaults.baseURL = 'http://localhost:3000/api';
exports.AuthContext = (0, react_1.createContext)();
const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = (0, react_1.useState)(JSON.parse(localStorage.getItem('user')) || null);
    const login = (inputs) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const res = yield axios_1.default.post('/auth/login', inputs);
            setCurrentUser(res.data);
        }
        catch (error) {
            console.error('Login Error:', error);
        }
    });
    const logout = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield axios_1.default.post('/auth/logout');
            setCurrentUser(null);
        }
        catch (error) {
            console.error('Logout Error:', error);
        }
    });
    (0, react_1.useEffect)(() => {
        localStorage.setItem('user', JSON.stringify(currentUser));
    }, [currentUser]);
    return value = {};
    {
        currentUser, login, logout;
    }
};
exports.AuthContextProvider = AuthContextProvider;
 >
    { children }
    < /AuthContext.Provider>;
