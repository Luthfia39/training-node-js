import SUserProject from "@/services/userProject.service"
import { formatResponse } from "@/utils"
import { VGetByIdSchema, VUserProjectSchema } from "@/validators"
import { Request, Response, NextFunction } from "express"

const addUserProject = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { error, value } = VUserProjectSchema.validate(req.body)
    if (error) {
      throw new Error(error.message)
    }
    const data = await SUserProject.addUserProject(value)
    res.json(formatResponse(true, "success", data))
  } catch (error) {
    next(error)
  }
}

const removeUserProject = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { error, value } = VGetByIdSchema.validate(req.body)
    if (error) {
      throw new Error(error.message)
    }
    const data = await SUserProject.deleteUserProject(value.id)
    res.json(formatResponse(true, "success", data))
  } catch (error) {
    next(error)
  }
}

const CUserProject = {
  addUserProject,
  removeUserProject,
}

export default CUserProject
