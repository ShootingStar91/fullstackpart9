import express from 'express';
const app = express();
import { calculateBmi } from './bmiCalculator';
import { calculateExercises } from './exerciseCalculator';
app.use(express.json());

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
  if (!req.query.height || !req.query.weight) {
    res.status(400).json({ error: 'Invalid arguments'} );
    return;
  }
  const height = Number(req.query.height);
  const weight = Number(req.query.weight);
  if (isNaN(height) || isNaN(weight)) {
    res.status(400).json({ error: 'Invalid arguments'} );
    return;
  }
  const bmi = calculateBmi(height, weight);
  res.json({ weight, height, bmi });
});

app.post('/exercises', (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const exercises: any = req.body.daily_exercises;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const target: any = req.body.target;

  if (!exercises  || !target ) {
    res.status(400).json({ error: 'invalid arguments '});
  }
  if (exercises.length === 0 || isNaN(Number(target))) {
    res.status(400).json({ error: 'invalid arguments '});
  }

  const result = calculateExercises(exercises, target);
  res.json(result);
  
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

