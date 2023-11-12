import exp from "express";
import mongoose from "mongoose";
import bodyParser from 'body-parser';
import cabinetControllerRouter from './Controllers/CabinetController/Router';
import chairControllerRouter from './Controllers/ChairController/Router';
import tableControllerRouter from './Controllers/CabinetController/Router';

const app = exp();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.get('/', (req, res) => {
    console.log(req.body);

    res.json({ code: res.statusCode, message: res.statusMessage, headers: res.getHeaders() });
});

app.use('/api/cabinet', cabinetControllerRouter);
app.use('/api/chair', chairControllerRouter);
app.use('/api/table', tableControllerRouter);

app.listen(PORT, async() => {
    await mongoose.connect('mongodb://127.0.0.1:27017')
    console.log(`Server is running on port ${PORT}`);
});