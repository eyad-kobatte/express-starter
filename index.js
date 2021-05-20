const express = require('express');

const app = express();

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({ok: true, method: 'GET'})
});

app.post('/', (req, res) => {
    res.status(200).json({ok: true, method: 'POST', body: req.body})
});

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server listening on port ${port}`))
