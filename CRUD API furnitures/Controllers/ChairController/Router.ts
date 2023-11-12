import { Router } from "express";
import {getChairById} from "./Methods/getChairById";
import {getAllChairs} from "./Methods/getAllChairs";
import {createChair} from "./Methods/createChair";
import {updateChair} from "./Methods/updateChair";
import {deleteChair} from "./Methods/deleteChair";

const router = Router();

const ChairController = {
    getById: getChairById,
    getAll: getAllChairs,
    create: createChair,
    update: updateChair,
    delete: deleteChair,
}

router.get("/get/:_id", ChairController.getById);
router.get("/getAll", ChairController.getAll);
router.post("/create", ChairController.create);
router.put("/update/:_id", ChairController.update);
router.delete("/delete/:_id", ChairController.delete);

export default router;