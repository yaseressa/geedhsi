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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var users_model_1 = require("../models/users-model");
var newUser = new users_model_1.Users();
var index = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var planting, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, newUser.index()];
            case 1:
                planting = _a.sent();
                // @ts-ignore
                res.json(planting);
                return [3 /*break*/, 3];
            case 2:
                e_1 = _a.sent();
                res.status(400).json(e_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var show = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, newUser.show(Number(req.params.id))];
            case 1:
                user = _a.sent();
                console.log(user);
                res.json(user);
                return [3 /*break*/, 3];
            case 2:
                e_2 = _a.sent();
                res.status(400).json(e_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var create = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userc, u, e_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                userc = {
                    name: req.body.name,
                    email: req.body.email,
                    gender: req.body.gender,
                    password: req.body.password
                };
                return [4 /*yield*/, newUser.create(userc)];
            case 1:
                u = _a.sent();
                //@ts-ignore
                console.log(u);
                res.status(201).json(u);
                return [3 /*break*/, 3];
            case 2:
                e_3 = _a.sent();
                res.status(400);
                res.json(e_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var update = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userc, u, e_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                userc = {
                    name: req.body.name,
                    email: req.body.email,
                    gender: req.body.gender,
                    password: req.body.password
                };
                console.log(req.params.id, userc);
                return [4 /*yield*/, newUser.update(Number(req.params.id), userc)];
            case 1:
                u = _a.sent();
                //@ts-ignore
                res.status(201).json(u);
                return [3 /*break*/, 3];
            case 2:
                e_4 = _a.sent();
                res.status(400);
                res.json(e_4);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports["default"] = (function (app) {
    app.get("/dash", index);
    app.post("/dash", create);
    app.put("/dash/user/:id", update);
    app.get("/dash/user/:id", show);
});
