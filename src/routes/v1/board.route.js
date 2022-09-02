import  express  from 'express'
import { BoardController } from "*/controllers/board.controller"
import { BoardValidation } from "*/validations/board.validation.js"

const router = express.Router()

router.route('/')
    //  .get((req, res) => console.log('Get boards'))
      .post(BoardValidation.createNew, BoardController.createNew) 

export const boardRoutes = router
