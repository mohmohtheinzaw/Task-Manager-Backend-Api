"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userController_1 = __importDefault(require("../controller/userController"));
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const userController = new userController_1.default();
router.get("/:id/get-info", userController.getInfo);
router.put("/:id/update-info", userController.updateInfo);
router.delete("/:id", userController.delete);
exports.default = router;
