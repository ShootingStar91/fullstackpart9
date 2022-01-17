export {};

const calculateBmi = (height: number, weight: number) : string => {
  const bmi = weight / ((height / 100) * (height / 100));
  let message = "";
  if (bmi < 16.0) {
    message = "Severe thinness";
  } else if (bmi < 17.0) {
    message = "Moderate thinness";
  } else if (bmi < 18.5) {
    message = "Mild thinness";
  } else if (bmi < 25.0) {
    message = "Normal (healthy weight)";
  } else if (bmi < 30.0) {
    message = "Overweight";
  } else {
    message = "Obese";
  }
  return message;
}

if (process.argv.length !== 4) {
  throw new Error('Invalid number of arguments. Give 2');
}

const args = process.argv.splice(2, process.argv.length);
const height = Number(args[0]);
const weight = Number(args[1]);

if (isNaN(height) || isNaN(weight)) {
  throw new Error('Both arguments need to be numbers');
}

console.log(calculateBmi(height, weight));

