const express = require('express');
const connectDB = require("./config/db")
const path = require('path');

const app = express();

//connect database
connectDB();

//middleware
app.use(express.json({ extended: false }));

// Routes

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/records', require('./routes/records')); 

// serve static assests in production
if(process.env.NODE_ENV === 'production') {
    //set static folder
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))})
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));