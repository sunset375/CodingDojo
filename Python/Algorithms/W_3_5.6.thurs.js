// Write a function that given a sorted array of page numbers, return a string representing a book index. Combine consecutive pages to create ranges.

// Example: [1,3,4,5,6,7,8,10] --> "1, 3-8, 10"

function bookIndex(arr) {
	var temp = [];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i]+1 == arr[i+1]) {
			var start = arr[i];
			while (arr[i]+1 == arr[i+1]) {
				i++;
			}
		var end = arr[i];
		temp.push(start + "-" + end);
		} else {
			temp.push(arr[i]);
		}
	}
	var newstring = temp.join(',');
	return newstring
}


console.log(bookIndex([1,3,4,5,6,7,8,10]))