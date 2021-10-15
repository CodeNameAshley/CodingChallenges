const  tip20 = (20/100);

const  tip15 = (15/100);

const  value1 = 275;
const  value2 = 40;
const value3 = 430;

const bill1 = value1 >=  50 && value1 <= 300 ? console.log(`The bill is ${value1}, tip should be ${value1  * tip15}, total bill is ${value1 + (value1 * tip15)}`) :  console.log(`The bill is ${value1} , tip should be ${value1 * tip20}, total bill is ${value1 + (value1 * tip20)}`);

const bill2 = value2 >= 50 && value2 <= 300 ? console.log(`The bill is ${value2}, tip should be ${value2 * tip15}, total bill is ${value1 + (value2 * tip15)}`) :  console.log(`The bill is ${value2}, tip should be ${value2 * tip20}, total bill is ${value2 + (value2 * tip20)}`);

const bill3 = value3 >= 50 && value3 <= 300 ? console.log(`The bill is ${value3}, tip should be ${ value3 * tip15},  total bill is ${value3 + (value3 * tip15)}`) : console.log(`The bill is ${value3}, tip should be ${value3 * tip20}, total bill is ${value3 + (value3 * tip20)}`);

// short version 

const bill = 40;

const tip = bill >= 50 && <= 300 ? bill * 0.15 : bill * 0.2;

