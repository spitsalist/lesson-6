const express = require('express');
const router = require('./src/Router')
const users = require('./src/user-controller')
require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 3000; 


app.use(express.json());
app.use(router)
app.use(users)



try {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
} catch (err) {
    console.error(err);
}