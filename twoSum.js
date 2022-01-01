var twoSum = function (nums, target) {
  let firstNumber, secondNumber;
  for (let i = 0; i < nums.length; i++) {
    firstNumber = nums[i];
    secondNumber = target - firstNumber;
    if (nums.indexOf(secondNumber) > -1 && i !== nums.indexOf(secondNumber)) {
      return [i, nums.indexOf(secondNumber)];
    }
  }
};

console.log(twoSum([3, 2, 4], 6));
