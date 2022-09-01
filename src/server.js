import express from "express";

import { connectDB, getDB } from "./config/mongodb";
import { env } from "./config/environtment";
import { BoardModel } from '*/models/board.model.js'


connectDB().then(() => console.log('Connected successfully to database server !'))
            .then(() => bootServer())
            .catch(error => {
                console.error(error)
                process.exit(1)
            })

const bootServer = () => {
    const app = express()

    app.get('/test', async (req, res) => {
        res.end('<h1>Hello </h1> <hr/>')
    })

    app.listen(env.APP_PORT, env.APP_HOST, () => {
    console.log(`Hi there `)
    })
}