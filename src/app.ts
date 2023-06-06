import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import globalErrorHandler from './app/middlewares/globalErrorHandelar'
import { UserRoutes } from './app/modules/users/user.route'
const app: Application = express()

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application routes

app.use('/api/v1/users/', UserRoutes)

//Testing
app.get('/', async (req: Request, res: Response) => {
  res.send('Working Successfully')
})

// global error handler 

app.use(globalErrorHandler)

export default app