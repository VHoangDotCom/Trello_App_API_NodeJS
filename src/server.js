import express from "express";

import { connectDB } from "./config/mongodb";

import { mapOrder } from '*/utilities/sorts.js'

const app = express()

const hostname = 'localhost'
const port = 8017

connectDB().catch(console.log)

app.get('/', (req, res) => {
    res.end('<h1>Hello </h1> <hr/>')
})

app.listen(port, hostname, () => {
   console.log(`Hi there `)
})