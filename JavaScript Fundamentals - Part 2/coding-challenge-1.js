// coding challenge 1 - JS Fundamentals part 2

// A team only wins if it has at least double the average score of the other team
// otherwise no team wins



const calcAverage = (score1, score2, score3)=> (score1 + score2 + score3) / 3;

const dolphinScore1 = calcAverage(44 + 23 + 71); 
console.log(calcAverage(dolphinScore1));

const koalaScore1 = calcAverage(65 + 54 + 49); 
console.log(calcAverage(koalaScore1));

const checkWinner = function (avgDolphins, avgKoalas) {
if (avgDolphins >= 2 * avgKoalas ) {
    console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`)
} else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs ${avgDolpho
    })`)
} else {
    return 'No team wins!'
}
};

checkWinner(dolphinScore1, koalaScore1);

const dolphinScore2 = calcAverage(85 + 54 + 41);
console.log(dolphinScore2);

const koalaScore2 = calcAverage(23 + 34 +27);
console.log(koalaScore2);

checkWinner(dolphinScore2, koalaScore2);


