/*
Create a function that takes an array of strings and returns an array with only the
strings that have numbers in them. If there are no strings containing numbers, return an
empty array
*/

function getNumberOfArray(array) {
    let temp = [];
    array.forEach(element => {
        for (const value of element) {
            if (value == parseInt(value)) {
                temp.push(element);
                break;
            }
        }
    })

    return temp;
}

console.log(getNumberOfArray(["15j", "45", "mohadese", "455k66"]));
console.log(getNumberOfArray(["a", "b", "c", ""]));
console.log(getNumberOfArray(["this is a test", "test1"]));