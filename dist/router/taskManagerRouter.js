"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const taskManagerController_1 = __importDefault(require("../controller/taskManagerController"));
const router = express_1.default.router();
const taskManagerController = new taskManagerController_1.default();
router.post("/create-task", taskManagerController.createTask);
router.get("/get-task-with-range", taskManagerController.getTaskWithRange);
router.get("/get-total-count", taskManagerController.getTotalCount);
router.get("/:searchText/search", taskManagerController.searchTask);
exports.default = router;
