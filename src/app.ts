import express, {
  Application,
  Request,
  Response,
  json,
  urlencoded,
} from 'express'
import cors from 'cors'
const app: Application = express()
const port = 3000

app.use(cors())

// json parser

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

export default app
