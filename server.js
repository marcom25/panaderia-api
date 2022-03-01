const express = require('express');
const app = express();

const registerRoute = require('./routes/registerRoute');
const loginRoute = require('./routes/loginRoute');
const productsRoute = require('./routes/productsRoute');

const PORT = process.env.PORT || 8080;

app.use(express.json());

app.use('/register', registerRoute);
app.use('/login', loginRoute);
app.use('/products', productsRoute);


app.listen(PORT, () => console.log(`SERVER UP AT ${PORT}`));
