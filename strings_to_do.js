const removeBlanks = (str) => {
    let output = "";
    for (let index=0; index<str.length; index++) {
        if (str[index]!= " ") {
            output += str[index];
        }
    }
    return output;
}

console.log(removeBlanks("Th I s isa T E S T"));

const getDigits = (str) => {
    let digits = "";
    for (let index=0; index < str.length; index++) {
        if (!isNaN(str[index]) && str[index] != " ") {
            digits += str[index];
        }
    }
    console.log(digits);
    return new Number(digits);
}

console.log(getDigits("Th1 2I3 s4 is5a T67 ES8 T9"));

const acronym = (str) => {
    const words = str.split(" ");
    let acronymStr = "";
    for (let index=0; index < words.length; index++) {
        acronymStr += words[index][0];
    }
    return acronymStr.toUpperCase();
}

console.log(acronym("The quick brown fox jumps over the sleeping dog."));

const nonSpaces = (str) => {
    let counter = 0;
    for (let index=0; index < str.length; index++) {
        if (str[index] != " ") {
            counter++;
        }
    }
    return counter;
}

console.log(nonSpaces("She sells sea shells down by the sea shore!"));

const noShortStrings = (inputArr, num) => {
    let outputArr = [];
    for (let index=0; index < inputArr.length; index++) {
        if (inputArr[index].length >= num) {
            outputArr.push(inputArr[index]);
        }
    }
    return outputArr;
}

console.log(noShortStrings(["There", "was", "an", "old", "woman", "who", "swallowed", "a", "fly"], 3));