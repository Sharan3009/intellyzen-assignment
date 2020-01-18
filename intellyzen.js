'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());
    main();
});

function readLine() {
    return inputString[currentLine++];
}


function getMinimumCost(no_of_villagers,costArr){
    costArr = costArr.sort((a,b)=>a-b)
    let sum = 0;
    while (no_of_villagers>3){
        sum += Math.min((costArr[0] + 2*costArr[1] + costArr[no_of_villagers-1]),(costArr[no_of_villagers-2] + costArr[no_of_villagers - 1] + 2*costArr[0]));
        no_of_villagers -= 2;
    }
    if (no_of_villagers===3){
        sum = sum + costArr[0] + costArr[1] + costArr[2];
    }
    else if (no_of_villagers===2){
        sum = sum + costArr[1];
    }
    else if (no_of_villagers ===1){
        sum = sum + costArr[0]
    }
    return sum;
}

function main() {
    const arCount = parseInt(readLine(), 10);
    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));
    console.log(getMinimumCost(arCount,ar));
}
