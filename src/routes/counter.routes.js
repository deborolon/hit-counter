import { Router } from "express"
import counterController from "../controller/counter.controller.js"

const router = Router()

router.get("/contador", counterController.getCounter)
router.post("/contador", counterController.postCounter)

export default router