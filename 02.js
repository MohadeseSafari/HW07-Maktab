/*
Create a function that identifies the very first item that has recurred in the string
argument passed. It returns the identified item with the index where it first appeared and
the very next index where it resurfaced -- entirely as an object; or as an empty object if the
passed argument is either null, undefined, empty string, or no recurring item exists.
recurIndex("AREDCBSDERD") ➞ {"D": [3, 7]}
recurIndex("") ➞ {}
recurIndex(null) ➞ {}
*/
function recurIndex(string) {
    if (string == "" || string == null) {
        return {};
    }
    let array = Array.from(string);
    let indices = []
    let filtered = array.filter((DuplicateElement, index) => 
    array.indexOf(DuplicateElement) !== index);
    let uniqueFiltered = [... new Set(filtered)];
    array.filter((item,index)=>{
        if(item == uniqueFiltered[0])
        indices.push(index)
    });
    return `{"${uniqueFiltered[0]}":[${indices[0]},${indices[1]}]}`

}
console.log(recurIndex("AREDCBSDERD"));
console.log(recurIndex(""));
console.log(recurIndex(null));
