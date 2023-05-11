// Sort an array of numbers using selection sort



function selectionSort(arr) {
const sortedArr = arr.sort((a, b) => {
  if (a < b) {
    return -1
  } else if (a > b){
    return 1
  } else {
    return 0
  }
}) 
console.log(sortedArr)
return  sortedArr
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("Expecting: [-6, -3, 0, 1, 10, 20, 21, 23, 25]")
  console.log("=>", selectionSort([0, 25, 1, -3, 20, 23, 21, -6, 10 ]))

  console.log("");

  // store the current time in a variable called start time

  // loop 1000 times:
  //   execute the method using a small input, e.g. three items if input is an Array
  //   execute the method using a larger input, e.g. 100 items if input is an Array
  
  // average runtime = (current time - start time) / 2000

  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
}

module.exports = selectionSort;

// Please add your pseudocode to this file
// loop through the array with the sort method; compare each number against every other number to find the smaller number and determine its position behind or in front of each number
// 



// And a written explanation of your solution
// I used the Array.sort() method to loop through the array and compare each number to the other numbers!
// I passed a compare function to the sort function show that if a was less than b, return -1. If a> b, return 1, and if a== b, return 0 so that it dodesn't move!



