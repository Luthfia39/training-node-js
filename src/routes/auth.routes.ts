import CAuth from "@/controllers/auth.controller"
import { Router } from "express"

const router = Router()

router.post("/login", CAuth.login)
router.post("/register", CAuth.register)
router.post("/refresh-token", CAuth.refreshToken)
<<<<<<< Updated upstream
router.post("/scheduler", CAuth.scheduler)
=======
<<<<<<< Updated upstream
router.post("/scheduler", CAuth.scheduler)
=======
router.post("/scheduler", CAuth.runScheduler)
>>>>>>> Stashed changes
>>>>>>> Stashed changes

export default router
