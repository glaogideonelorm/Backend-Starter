import { Router } from "express";
import {
  getAllBirds,
  createBird,
  getBirdById,
  updateBird,
  deleteBird,
} from "../controllers/bird";

const router = Router();
//so i moved all crud operations to controllers to be to handle routes easily
router.get("/", getAllBirds);
router.post("/", createBird);
router.get("/:id", getBirdById);
router.put("/:id", updateBird);
router.delete("/:id", deleteBird);

export default router;
