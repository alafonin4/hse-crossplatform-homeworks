import { Router } from "express";
import {getTableById} from "./Methods/getTableById";
import {getAllTables} from "./Methods/getAllTables";
import {createTable} from "./Methods/createTable";
import {updateTable} from "./Methods/updateTable";
import {deleteTable} from "./Methods/deleteTable";

const router = Router();

const ChairController = {
    getById: getTableById,
    getAll: getAllTables,
    create: createTable,
    update: updateTable,
    delete: deleteTable,
}

router.get("/get/:_id", ChairController.getById);
router.get("/getAll", ChairController.getAll);
router.post("/create", ChairController.create);
router.put("/update/:_id", ChairController.update);
router.delete("/delete/:_id", ChairController.delete);

export default router;