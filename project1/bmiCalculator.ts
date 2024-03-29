export {};

export const calculateBmi = (height: number, weight: number) : string => {
    
  if (isNaN(height) || isNaN(weight)) {
    throw new Error('Both arguments need to be numbers');
  }

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
};
