//filter
 /*function arrayFilter(array) {
    let arr = [];
    for (let i = 0; i <= array.length; i++) {
        if (condition) {
            arr.push(arr[i])
        }
        return arr;
    }
}
console.log(arrayFilter([1, 2, 3, 4]))*/
 


//find
function arrayFind(array) {
    for (let i = 0; i <= array.length; i++) {
        if ( i < 12) {
            return array[i];
        }
    }
}
console.log(arrayFind([1, 2, 3]));




//slice
function arraySlice(array, from, to) {
    let arr = [];
    if (from >= 0) {
        for (let i = from; i <= to; i++) {
            arr.push(array[i]);
        }
    } else {
        for (let i = array.length + from; i <= array.length + from - to + 1; i++) {
            arr.push(array[i]);
        }
    }
    return arr;
}
console.log(arraySlice([1, 2, 3, 4], 2, 3)); //[3,4]


//splice
function arraySplice(array, index) {
    var tempArray = new Array();
    var counter = 0;

    for (var i = 0; i < array.length; i++) {
        if (i != index) {
            tempArray[counter] = array[i];
            counter++;
        }
    }
    return tempArray;

}
console.log(arraySplice([1, 2, 3, 4, 5],2)) //[1 , 2 ,4 ,5]
