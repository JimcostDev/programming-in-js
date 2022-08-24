/**
 * Dado un arreglo como input comprobar si tiene uno o mas elementos repetidos
 */
function hasDuplicates(array){
    if (array instanceof Array){
        for (item = 0; item < array.length - 1; item++){
            if(array.slice(item+1).indexOf(array[item]) !== -1){ //sub-array
                return true; // duplicated
            }
        }
        return false;

    }else{
        throw TypeError ('The param of function must be an array');
    }
}

try {
    console.log(hasDuplicates([1,2,3])); // false
    console.log(hasDuplicates([1,2,3,3])); // true
    console.log(hasDuplicates([1,2,3,8,1,4])); // true
    console.log(hasDuplicates([1])); // false
} catch (error) {
    console.log(`Error: ${error.message}`);
}


// EXPLICATION
console.log('EXPLICATION: ');
//         idx = 0, 1, 2, 3, 4, 5
const numbers = [1, 2, 3, 8, 1, 4];
console.log(numbers);
let numbers_slice = numbers.slice(1); // next idx
console.log(numbers_slice);
const result = numbers_slice.indexOf(numbers[0]) //find the current item, returns -1 if not found
console.log(result);