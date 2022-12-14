const express = require('express');

const app = express();
const PORT = process.env.PORT ?? 3000;

const morgan = require('morgan');
require('dotenv').config();

app.use(morgan('env'));

app.listen(PORT, () => {
  console.log(`Server started at ${PORT} port`)
});
