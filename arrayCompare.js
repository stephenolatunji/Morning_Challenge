const arrayComparison = (array) => {
    let firstElement = array[0].toLowerCase();
    let secondElement = array[1].toLowerCase();

    let end = 0;
    for (let i = 0; i < secondElement.length; i++) {
        if (firstElement.indexOf(secondElement[i]) > -1) {
            end++;
        }

    }
    if (end == secondElement.length) {
        return true;
    } else {
        return false;
    }
}
console.log(arrayComparison(['father', 'fat']));
console.log(arrayComparison(['father', 'fast']));
