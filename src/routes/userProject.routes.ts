
import CUserProject from "@/controllers/userProject.controller"
import { Router } from "express"

const router = Router()

router.post("/add-user", CUserProject.addUserProject)
router.delete("/remove-user", CUserProject.removeUserProject)

export default router

