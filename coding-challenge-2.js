let markheight = 1.69;
let markweight = 78;

let johnheight = 1.95;
let johnweight = 92;


let marksBMI =  markweight/ (markheight *markheight);

let johnsBMI = johnweight / (johnheight * johnheight);

const markHigherBMI =  marksBMI < johnsBMI;

if (marksBMI > johnsBMI) {
    console.log(`Marks BMI ${marksBMI} is higher than Johns ${johnsBMI}!`);
} else if (johnsBMI > marksBMI) { 
    console.log(`Johns BMI ${johnsBMI} is higher thank Marks ${marksBMI}!`)
};
