
interface Result {
  periodLength: number,
  trainingDays: number,
  success: boolean,
  rating: number,
  ratingDescription: string,
  target: number,
  average: number
}


const calculateExercises = (exercised: Array<number>, target: number) : Result => {
  const periodLength = exercised.length;
  const trainingDays = exercised.filter(hours => hours > 0.0).length;
  const average = exercised.reduce((prev, current) => prev + current) / exercised.length;
  const success = average >= target;
  let rating = 3;
  let ratingDescription = "You exceeded your own expectations!";
  const diff = average - target;
  if (diff < 0) {
    rating = 1;
    ratingDescription = "You did not reach your goal.";
  } else if (diff < 1.2) {
    rating = 2;
    ratingDescription = "You exercised in a disciplined fashion.";
  }

  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average
  }
}

const args = process.argv.splice(2, process.argv.length);
const target = Number(args.splice(0, 1));
const exerciseArray = args.map(item => Number(item));

if (exerciseArray.length === 0) {
  throw new Error('Exercise array is empty! Too few arguments');
}

if (isNaN(target)) {
  throw new Error('Target hours argument was not a number');
}

console.log(calculateExercises(exerciseArray, target));