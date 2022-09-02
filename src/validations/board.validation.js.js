import Joi from "joi"
import { HttpStatusCode } from '*/utilities/constants'

const createNew = async (req, res, next) => {
  const condition = Joi.object ({
    title: Joi.string().required().min(3).max(30),
    // columnOrder: Joi.array().items(Joi.string()).default([]),
    // craetedAt: Joi.date().timestamp().default(Date.now()),
    // updatedAt: Joi.date().timestamp().default(null),
    // _destroy: Joi.boolean().default(false)
  })
  try{
      await condition.validateAsync(req.body, { abortEarly: false })
      next()
  } catch (error){
      res.status( HttpStatusCode.BAD_REQUEST ).json({
        errors: new Error(error).message
      })
  }
}

export const BoardValidation = { createNew }