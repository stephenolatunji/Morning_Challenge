// function to return if string letters in an array matches
const compareString = (str) => {
    // convert to lower case
    var firstString = str[0].toLowerCase();
    var secondString = str[1].toLowerCase();

    // split the array into two inputs
    firstString = firstString.split("");
    secondString = secondString.split("");

    // looping through array, check if letter compares in both string 
    var check = 0;
    for (var i = 0; i < secondString.length; i++) {
        if (firstString.indexOf(secondString[i]) > -1) {
            check++;
        }
    }

    if (check == secondString.length) {
        return true;
    } else {
        return false;
    }
}
console.log(compareString(['hello', 'hello']));
console.log(compareString(['hello', 'hell']));

