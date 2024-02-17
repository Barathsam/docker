const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3001;
import { Prisma } from '@prisma/client'
// import prisma from '../../../prisma/index.ts'

app.use(cors());
app.use(express.json());
app.use('*', (req, res, next) => {
    res.json('hii')
    next()
})
app.post('/api/name', (req, res) => {
    //  const getAllLoadingPoint = () => prisma.loadingPoint.findMany({})
    res.status(200).json(`got the name called ${req.body.name}`)
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});