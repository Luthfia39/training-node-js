import Joi from "joi";

export const VUserProjectSchema = Joi.object({
    projectId:  Joi.string().required(),
    userId: Joi.string().required()
})

export const VIdProjectSchema = Joi.object({
    id:  Joi.string().required()
})