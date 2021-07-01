/* Bubble Sort is an algorithm to sort an array. It
*  compares adjacent element and swaps thier position
*  The big O on bubble sort in worst and best case is O(N^2).
*  Not efficient.
*
*  In bubble sort, we keep iterating while something was swapped in
*  the previous inner-loop iteration. By swapped I mean, in the
*  inner loop iteration, we check each number if the number proceeding
*  it is greater than itself, if so we swap them.
*
*  Wikipedia: https://en.wikipedia.org/wiki/Bubble_sort
*  Animated Visual: https://www.toptal.com/developers/sorting-algorithms/bubble-sort
*/

/*
*  Doctests
*
*  > bubbleSort([5, 4, 1, 2, 3])
*  [1, 2, 3, 4, 5]
*  > bubbleSort([])
*  []
*  > bubbleSort([1, 2, 3])
*  [1, 2, 3]
*
*  > alternativeBubbleSort([5, 4, 1, 2, 3])
*  [1, 2, 3, 4, 5]
*  > alternativeBubbleSort([])
*  []
*  > alternativeBubbleSort([1, 2, 3])
*  [1, 2, 3]
*/


// I - unsorted array
// O - sorted array
// C - none
// E - empty array, sorted array

function bubbleSort(array) {
  // loop over the input array, starting at index 0
  for (var i = 0; i < array.length; i++) {
    // loop a second time over the input array, starting at adjacent element 
    for (var k = i+1; k < array.length; k++) {
      // store the first element in a temp variable
      var temp = array[i];
      // if the first element is larger than the second element, we want to swap
      if (array[i] > array[k]) {
        // reassign the first element to be the second
        array[i] = array[k];
        // reassign the second element to be the value stored in temp
        array[k] = temp;
      }
    }
  }
  // return the sorted array
  return array;
}

// console.log(bubbleSort([5, 4, 1, 2, 3]));
// [1, 2, 3, 4, 5]

// console.log(bubbleSort([]));
// []
// console.log(bubbleSort([1, 2, 3]));
// [1, 2, 3]

//======== Alternative Bubble Sort =============

function alternativeBubbleSort(array) {
  // create a swapped boolean flag and initialize to true
  var swapped = true;
  while (swapped) {
    // inside the while loop, reassign the flag to false
    swapped = false;
    // iterate with a for loop, starting at index 0 up to the last element
    for (var i = 0; i < array.length - 1; i++) {
      // store the value of the first element in a temp variable
      var temp = array[i];
      // determine if the elements need to be swapped
      if (array[i] > array[i+1]) {
        array[i] = array[i+1];
        array[i+1] = temp;
        // reassign the flag to be true after swapping
        swapped = true;
      }
    }
  }
  // return the sorted array
  return array;
}


// console.log(alternativeBubbleSort([5, 4, 1, 2, 3]));
// [1, 2, 3, 4, 5]

// console.log(alternativeBubbleSort([]));
// []

// console.log(alternativeBubbleSort([1, 2, 3]));
// [1, 2, 3]