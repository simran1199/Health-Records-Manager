const express = require('express');

const app = express();

app.get('/', (req, res) => res.json({msg: 'bmnnkjnkj'}));

// Routes

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/records', require('./routes/records')); 

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));