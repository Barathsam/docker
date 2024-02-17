const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3001;
app.use(cors());
app.use(express.json());
app.use('*', (req, res, next) => {
    res.json('hii')
    next()
})
app.post('/api/name', (req, res) => {
    res.status(200).json(`got the name called ${req.body.name}`)
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});