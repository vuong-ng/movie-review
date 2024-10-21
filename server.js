import express from 'express'
import cors from 'cors'
import reviews from './api/reviews.route.js'

const app = express()

app.use(cors())
app.use(express.json()) // allow server to accept json in the body of the response

app.use("/api/v1/reviews", reviews)
app.use("*", (req,res) => res.status(404).json({error:'not found'}))

export default app
