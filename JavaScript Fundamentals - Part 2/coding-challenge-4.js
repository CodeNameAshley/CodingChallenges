// coding challenge #4

const bills = [22, 295, 176, 440, 37, 105, 1100, 86, 52];

const tips = [];

const totals = [];

const calcTip = (amount) =>
  amount >= 50 && amount <= 300 ? amount * 0.15 : amount * 0.2;

for (let counter = 0; counter < bills.length; counter++) {
  const tip = calcTip(bills[counter]);
  tips.push(tip);
  totals.push(tip + bills[counter]);
}
console.log(bills);
console.log(tips);
console.log(totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage([10, 20, 30]));
console.log(calcAverage([5, 10, 15, 20, 25]));
console.log(calcAverage(totals));
