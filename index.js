require('dotenv').config(); // Load env variables

const { initDatabase } = require('./app/utils/initMongoDB');

const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
const productRoutes = require('./app/routes/productRoutes');

// const authRoutes = require('./app/routes/authRoutes');

const app = express();

initDatabase()

/** -------------------------------------------Main middlewares----------------------------------------- */
app.use(cors());
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(express.json());
/**----------------------------------------------------------------------------------------------------- */


/** -------------------------------------------Authentification----------------------------------------- */
// app.use('/api/auth', authRoutes);

/** -------------------------------------------Products------------------------------------------------- */
app.use('/api/product', productRoutes);


/**--------------------------------------------Start server--------------------------------------------- */
const PORT = process.env.PORT || 8000;

app.listen(
    PORT,
    process.env.HOST,
    () => {
        console.log(`Server started : ${PORT}`);
    }
)