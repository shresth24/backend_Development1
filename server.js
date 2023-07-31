
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/UserRoutes');
const productRoutes = require('./routes/ProductRoute');
const serviceRoutes = require('./routes/ServiceRoute');
const cartRoutes = require('./routes/CardItemRoutes');
require('./db/conn')
const app = express();
app.use(bodyParser.json());

// Routes
app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/services', serviceRoutes);
app.use('/card', cartRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
