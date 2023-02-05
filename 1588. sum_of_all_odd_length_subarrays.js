/**
 * 1588. Sum of All Odd Length Subarrays
Easy
3K
223
company
Adobe
company
Facebook
company
Google
Given an array of positive integers arr, return the sum of all possible odd-length subarrays of arr.

A subarray is a contiguous subsequence of the array.

 

Example 1:

Input: arr = [1,4,2,5,3]
Output: 58
Explanation: The odd-length subarrays of arr and their sums are:
[1] = 1
[4] = 4
[2] = 2
[5] = 5
[3] = 3
[1,4,2] = 7
[4,2,5] = 11
[2,5,3] = 10
[1,4,2,5,3] = 15
If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58
Example 2:

Input: arr = [1,2]
Output: 3
Explanation: There are only 2 subarrays of odd length, [1] and [2]. Their sum is 3.
Example 3:

Input: arr = [10,11,12]
Output: 66
 

Constraints:

1 <= arr.length <= 100
1 <= arr[i] <= 1000
 

Follow up:

Could you solve this problem in O(n) time complexity?

Accepted
144.1K
Submissions
172.6K
Acceptance Rate
83.5%
Seen this question in a real interview before?
1/4
 */

// Better solution

/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr){
    var sum=0;
    var n=arr.length;
    for(var i=0;i<n;i++)
    {
        var contribution= Math.floor(((i+1)*(n-i) +1)/2);
        sum+= contribution* arr[i];
    }
    return sum;  
};


// MY SOLUTION

/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {

    let sum = 0;
    let i = 1;
    while (i <= arr.length) {
        let j = 0;
        while (j + i <= arr.length) {
            let test = arr.slice(j, i+j);
            for (let k = 0; k < test.length; k++) {
                sum += test[k];
            }
            j++;
        }
        i += 2;
    }
    return sum;
};