const largestFour = (arr) => {
    let maxNumber = [0, 0, 0, 0];
    //create a first for loop through the array
    for (i = 0; i < arr.length; i++) {
        //create a second for loop to loop through the subarray
        for (r = 0; r < arr[i].length; r++) {
            if (arr[i][r] > maxNumber[i]) {
                maxNumber[i] = arr[i][r];

            }
        }
    }
    return maxNumber;
}
console.log(largestFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

console.log(largestFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

console.log(largestFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));

console.log(largestFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));