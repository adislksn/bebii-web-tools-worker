"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
// import cookieParser from 'cookie-parser'
const config_1 = require("./config");
const router_1 = require("./router");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = config_1.CONFIG.port || 3000;
app.use((0, cors_1.default)({ origin: true, credentials: true }));
app.use(body_parser_1.default.urlencoded({ limit: '50mb', extended: true }));
app.use(body_parser_1.default.json({ limit: '50mb' }));
// app.use(cookieParser())
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, content-type, Authorization, Content-Type');
    //   CONSOLE.info(`[${req.method}] - ${req.url} - ${req.ip} - ${new Date().toISOString()} `)
    next();
});
app.use('/public', express_1.default.static('public'));
app.routes = (0, router_1.appRouterv1)(app);
app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}/api/v1`);
});
//# sourceMappingURL=app.js.map