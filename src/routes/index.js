import { Router } from "express";
import Task from "../models/Task";
import { createTask, deleteTask, editTask, renderTask, toogleDone, updateTask } from "../controllers/task.controller";
const router = Router();
router.get("/", renderTask);
router.post("/task/add", createTask);
router.get("/about", (req, res) => {
    res.render("about");
});
router.get("/edit/:id", editTask);
router.post("/edit/:id", updateTask);
router.get("/delete/:id", deleteTask);
router.get("/toogleDone/:id", toogleDone);
export default router;
