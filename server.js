const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const logger = require('morgan');

const app = express();

const registerRoute = require('./routes/registerRoute');
const loginRoute = require('./routes/loginRoute');
const productsRoute = require('./routes/productsRoute');
const cookieRoute = require('./routes/cookieRoute');
const changePasswordRoute = require('./routes/changePasswordRoute');

const corsOptions = {
  origin: '*',
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

const PORT = process.env.PORT || 8050;

app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use(logger('dev'));

app.get('/', (req, res) => res.send('te conectaste al server'));

app.use('/register', registerRoute);
app.use('/login', loginRoute);
app.use('/products', productsRoute);
app.use('/cookies', cookieRoute);
app.use('/changePassword', changePasswordRoute);

app.listen(PORT, () => console.log(`SERVER UP AT ${PORT}`));
