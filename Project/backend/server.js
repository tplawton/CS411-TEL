// app.js

const express = require('express');
const app = express();
const path = require('path')
const routes = require('./routes/weather.js')

const port = process.env.PORT || 5050;



// middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})



// routes
app.use('/api/weather/', routes)

app.listen(port, () => console.log(`Server running on port ${port}`));