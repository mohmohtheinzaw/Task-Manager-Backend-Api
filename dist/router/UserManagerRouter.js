"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userManagerController_1 = __importDefault(require("../controller/userManagerController"));
const router = express_1.default.Router();
const userManagerController = new userManagerController_1.default();
router.get("/get-total", userManagerController.totalCount);
router.get("/search", userManagerController.searchUser);
router.post("/users-with-range", userManagerController.userWithRange);
exports.default = router;
