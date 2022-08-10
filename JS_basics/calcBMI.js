//bmi = weightInKilograms / heightInMeters**2;

function calculateBMI(height, weight) {
  let heightInMeters = height / 100;
  let BMI = weight/(heightInMeters**2);
  return BMI.toFixed(2);
}

console.log(calculateBMI(180, 80)); // "24.69"

