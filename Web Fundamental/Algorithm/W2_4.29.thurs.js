var arr2d = [ [2, 5, 8],
              [3, 6, 1],
              [5, 7, 7] ];
    
// We can console.log the `8` in this array if we
console.log(arr2d[0][2]);
// the first index `0` will select the `[2, 5, 8]` sub-array
// the second index `2` will select the `8` out of that sub-array

function isPresent2d(arr2d, value) {
    for(let i=0; i<arr2d.length; i++) {
        for(let j=0; j< arr2d[i].arr2dlength; j++) {
            if(arr2d[i][j] === value) {
                return true;
            }
        }
    }
    return false;
}

isPresent2d([ [2, 5, 8], [3, 6, 1], [5, 7, 7]], 10)



// complete the following function
function flatten(arr2d) {
    var flat = [];
    for(let i=0; i<arr2d.length; i++) {
        for(let j=0; j< arr2d[i].length; j++) {
            flat.push(arr2d[i][j]);
        }
    }
    // your code here
    return flat;
}
    
var result = flatten( [ [2, 5, 8], [3, 6, 1], [5, 7, 7] ] );
console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]

