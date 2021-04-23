var fruit1 = "apples";
var fruit2 = "oranges";
    
fruit2 = fruit1;
    
console.log(fruit2 + " and " + fruit1);


// 222222222222222222222222222222222222222222222

var fruit1 = "apples";
var fruit2 = "oranges";
    
var temp = fruit1; // temp is a common name for this
fruit1 = fruit2;
fruit2 = temp;
    
console.log(fruit2 + " and " + fruit1);



// 3333333333333333333333333333333333333333333333333333333
var start = 0;
var end = 12;
    
while(start < end) {
    console.log("start: " + start + ", end: " + end);
    start += 2;
    end -= 2;
}


// Revesing an array  **************************

function reverse(array) {
    var newarray = [];
    for{var i = array.length - 1; i >=0; i--
        }
    }
}

var result1 = reverse["a", "b", "c", "d", "e"];


//////////////////////////////

function reverse(arr){
    for (var i=0; i < arr.length/2; i++) {
        var temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    console.log(arr);
}

reverse([1,2,3,4,5])
