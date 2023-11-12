import { Router } from "express";
import {getCabinetById} from "./Methods/getCabinetById";
import {getAllCabinets} from "./Methods/getAllCabinets";
import {createCabinet} from "./Methods/createCabinet";
import {updateCabinet} from "./Methods/updateCabinet";
import {deleteCabinet} from "./Methods/deleteCabinet";

const router = Router();

const CabinetController = {
    getById: getCabinetById,
    getAll: getAllCabinets,
    create: createCabinet,
    update: updateCabinet,
    delete: deleteCabinet,
}

router.get("/get/:_id", CabinetController.getById);
router.get("/getAll", CabinetController.getAll);
router.post("/create", CabinetController.create);
router.put("/update/:_id", CabinetController.update);
router.delete("/delete/:_id", CabinetController.delete);

export default router;