import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import UserRoutes from './routes/users.js';

const PORT = process.env.port || 8000;
const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use("/", UserRoutes);

app.get("/", (req, res) => {
    res.status(200).send("Hello")
})
app.all("*", (req, res) => res.send("Route does not exist.") )

app.listen(PORT, (err) => {
    if(err){
        console.log("internal server error")
    } else {
        console.log("Server started at", PORT);
    }
})