import express from 'express';
import productsRouter from '../src/routes/products.router.js'
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('ping', (req, res) => {
    res.send('pong');
})
app.use('/api/products', productsRouter);


const SERVER_PORT = 8080;
app.listen(SERVER_PORT, () => {
    console.log("Servidor escuchando por el puerto: " + SERVER_PORT);
});