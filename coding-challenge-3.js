const dolphinavg = Math.round((96 + 108 + 89) / 3)

const koalaavg = Math.round((88 + 91 + 110) / 3)

if (dolphinavg > koalaavg ) {
    console.log(`Dolphins win with a score of ${dolphinavg}`)
} else if (koalaavg > dolphinavg) {
    console.log(`Koalas win with a score of ${koalaavg}`)
} else if (koalaavg = dolphinavg) {
    console.log(`It's a draw! Scores are Koalas - ${koalaavg} Dolphins ${dolphinavg}`)
}

const dolphinavg1 = Math.round((7 + 112 +101) / 3)

const koalaavg1 = Math.round((109 + 95 + 123)/3)

if (dolphinavg1 > koalaavg1 && dolphinavg1 > 100) {
    console.log(`Dolphins win Bonus Round 1 with a score average of ${dolphinavg1}`)
} else if (koalaavg1 > dolphinavg1 && koalaavg1 > 100) {
    console.log(`Koalas win Bonus Round 1 with a score average of ${koalaavg1}`)
};

const dolphinavg2 = Math.round((97 + 112 + 101) / 3);

const koalaavg2 = Math.round((109 + 95 +106) / 3);

if (dolphinavg2 > koalaavg2 && dolphinavg2 > 100) {
    console.log(`Dolphins win Bonus Round 2 with a score average of ${dolphinavg2}`)
} else if (koalaavg2 > dolphinavg2 && koalaavg2 > 100) {
    console.log(`Koalas win Bonus Round 2 with a score average of  ${koalaavg2}`)
} else if (koalaavg2 === dolphinavg2 && dolphinavg2 > 100 && koalaavg2 > 100) {
    console.log(`Its a draw both teams scored over 100! Dolphins scored - ${dolphinavg2}, Koalas scored - ${koalaavg2} `)
} else {
    console.log(`No team has won the trophy, both teams scored below 100!`)
}