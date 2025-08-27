"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var buildWebpackConfig_1 = require("./config/build/buildWebpackConfig");
exports.default = (function (env) {
    var paths = {
        entry: path_1.default.resolve(__dirname, 'src', 'index.tsx'),
        build: path_1.default.resolve(__dirname, 'build'),
        html: path_1.default.resolve(__dirname, 'public', 'index.html'),
        src: path_1.default.resolve(__dirname, 'src'),
    };
    var mode = env.mode || 'development';
    var PORT = env.port || 3000;
    var isDev = mode === 'development';
    var config = (0, buildWebpackConfig_1.buildWebpackConfig)({
        mode: mode,
        paths: paths,
        isDev: isDev,
        port: PORT
    });
    return config;
});
