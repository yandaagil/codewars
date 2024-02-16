// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

function sumArray(array) {
  if (Array.isArray(array)) {
    const max = Math.max(...array);
    const min = Math.min(...array);
    array.splice(array.indexOf(max), 1);
    array.splice(array.indexOf(min), 1);

    return array.reduce((total, num) => total + num, 0);
  }

  return 0;
}

sumArray(NaN);
sumArray();
sumArray(null);
sumArray([]);
sumArray([3]);
sumArray([3, 5]);
sumArray([6, 2, 1, 8, 10]);
sumArray([0, 1, 6, 10, 10]);
sumArray([-6, -20, -1, -10, -12]);
sumArray([-6, 20, -1, 10, -12]);
