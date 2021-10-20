const calcTip = (amount) => amount  >= 50 &&  amount <=300 ? amount * 0.15 : amount * 0.2;

const bills = [125, 555, 44];

const tips = [];

const billTip = tips.push(calcTip(bills[0])); tips.push(calcTip(bills[1]));  tips.push(calcTip(bills[2])); 

const total = []

const sum = total.push(calcTip(bills[0] + bills[0]));   total.push(calcTip(bills[1] + bills[1]));   total.push(calcTip(bills[2] + bills[2])); 