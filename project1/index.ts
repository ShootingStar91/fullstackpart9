import express from 'express';
const app = express();
import { calculateBmi } from './bmiCalculator';

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!')
});

app.get('/bmi', (req, res) => {
  if (!req.query.height || !req.query.weight) {
    res.status(400).json({ error: 'Invalid arguments'} );
    return
  }
  const height = Number(req.query.height)
  const weight = Number(req.query.weight)
  if (isNaN(height) || isNaN(weight)) {
    res.status(400).json({ error: 'Invalid arguments'} );
    return
  }
  const bmi = calculateBmi(height, weight);
  res.json({ weight, height, bmi });
})

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})

