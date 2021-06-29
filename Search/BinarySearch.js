/* Binary Search: https://en.wikipedia.org/wiki/Binary_search_algorithm
 *
 * Search a sorted array by repeatedly dividing the search interval
 * in half. Begin with an interval covering the whole array. If the value of the
 * search key is less than the item in the middle of the interval, narrow the interval
 * to the lower half. Otherwise narrow it to the upper half. Repeatedly check until the
 * value is found or the interval is empty.
 */

  // I - sorted array and target element
  // O - index of target element
  // C - log(n)
  // E - empty array, target not found

function binarySearchRecursive (array, target, min, max) {
  var min = min || 0;
  var max = max || array.length - 1;
  var mid = Math.floor((min + max) / 2);

  if (!array.length) {
    return null;
  }
  if (target === array[mid]) {
    return mid;
  }
  if (min === max) {
    return null;
  }

  if (target < array[mid]) {
    return binarySearchRecursive(array, target, min, mid - 1);
  }
  if (target > array[mid]) {
    return binarySearchRecursive(array, target, mid + 1, max);
  }
}

function binarySearchIterative (array, target) {
  // create 3 pointers

  // min is the starting index
  var min = 0;
  // max is the ending index
  var max = array.length - 1;
  // mid is the index between the min and max
  var mid = Math.floor((min + max) / 2);
  // iterate using a while loop to continue as long as min is less than or equal to the max index
  while (min <= max) {
    // if the target is equal to the element at the mid, return the mid index 
    if (target === array[mid]) {
      return mid;
    }
    // if the target is less than the element at the mid, reassign max to be one less than the mid
    if (target < array[mid]) {
      max = mid - 1;
    }
    // if the target is greater than the element at the mid, reassign min to be one greater than the mid
    if (target > array[mid]) {
      min = mid + 1;
    }
    // reassign the mid after reassigning the min or max
    mid = Math.floor((min + max) / 2);
  }
  // when the loop finishes, if no element was found, return null
  return null;
}

/* ---------------------------------- Test ---------------------------------- */

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const stringArr = [
  'Alpha',
  'Bravo',
  'Charlie',
  'Delta',
  'Echo',
  'Foxtrot',
  'Golf',
  'Hotel',
  'India',
  'Juliet',
  'Kilo',
  'Lima',
  'Mike',
  'November',
  'Oscar',
  'Papa',
  'Quebec',
  'Romeo',
  'Sierra',
  'Tango',
  'Uniform',
  'Victor',
  'Whiskey',
  'X-Ray',
  'Yankee',
  'Zulu'
]

console.log(binarySearchRecursive(arr, 3))
console.log(binarySearchIterative(arr, 7))
console.log(binarySearchRecursive(arr, 13))

console.log(binarySearchIterative(stringArr, 'Charlie'))
console.log(binarySearchRecursive(stringArr, 'Zulu'))
console.log(binarySearchIterative(stringArr, 'Sierra'))
