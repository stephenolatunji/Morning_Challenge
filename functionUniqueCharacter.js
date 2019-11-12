const uniqueCharacter = (string) => {

    let input = string;
    let uniqueString = '';

    for (let i = 0; i < input.length; i++) {
        if (uniqueString.indexOf(input.charAt(i)) == -1) {
            uniqueString += input[i];
        }
    }
    return uniqueString;
}
console.log(uniqueCharacter('thequickbrownfoxjumpsoverthelazydog'));