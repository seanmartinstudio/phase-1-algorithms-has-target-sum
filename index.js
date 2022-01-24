

function hasTargetSum(array, target) {
for (let i = 0; i < array.length; i++) {

  const complement = target - array[i]

  for (let j = i + i; j < array.length; j++) {

    if (array[j] === complement) return true

  }
}

return false
}






/* 
  Write the Big O time complexity of your function here
*/

/* 
Iterat through each number in the array
  for the current num, edintify complemenent that adds to the target (compliment = target - num)
  iterate throughthe rest of the array
  check if any number is our compliement
  if so, return true

if I reach the end of the array, return False
*/

/*
Create a function that iterates through an array and finds the sum of every two number pair.
If sum of two number pair is equal to the target nuymber, return true.
If there are so two number pairs that's sum equals the target number, return false. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false ***");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;

