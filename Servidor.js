const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.get('/', (req,res) => {
  res.sendFile(__dirname + "/index.html")
})
app.post('/soma', (req, res) => {
  const { num1, num2 } = req.body;
  const resultado = num1 + num2;
  res.json({ resultado });
});

app.listen(3000, () => {
  console.log('Servidor em execução na porta 3000');
});


