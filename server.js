import express from 'express';
import sum from './sum.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
//   res.send('Hello, World!');
  res.json({ message: 'Hello, World!' });
});




app.get('/getSum/:a/:b', (req, res) => {
  const { a, b } = req.params;
  res.json({ sum: sum(Number(a), Number(b)) });
});