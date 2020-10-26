const express = require('express');

const app = express();

app.get('/', (req, res) => res.json({msg: 'bmnnkjnkj'}))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));