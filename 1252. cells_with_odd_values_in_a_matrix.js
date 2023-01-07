/**
 * Easy
932
1.3K
company
Bloomberg
company
Google
company
Uber
There is an m x n matrix that is initialized to all 0's. There is also a 2D array indices where each indices[i] = [ri, ci] represents a 0-indexed location to perform some increment operations on the matrix.

For each location indices[i], do both of the following:

Increment all the cells on row ri.
Increment all the cells on column ci.
Given m, n, and indices, return the number of odd-valued cells in the matrix after applying the increment to all locations in indices.

 

Example 1:


Input: m = 2, n = 3, indices = [[0,1],[1,1]]
Output: 6
Explanation: Initial matrix = [[0,0,0],[0,0,0]].
After applying first increment it becomes [[1,2,1],[0,1,0]].
The final matrix is [[1,3,1],[1,3,1]], which contains 6 odd numbers.
Example 2:


Input: m = 2, n = 2, indices = [[1,1],[0,0]]
Output: 0
Explanation: Final matrix = [[2,2],[2,2]]. There are no odd numbers in the final matrix.
 

Constraints:

1 <= m, n <= 50
1 <= indices.length <= 100
0 <= ri < m
0 <= ci < n
 

Follow up: Could you solve this in O(n + m + indices.length) time with only O(n + m) extra space?
 */

/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function (m, n, indices) {

    let indicesLength = indices.length;
    let i = 0;
    let oddCount = 0;
    let arr = [];

    for (let i = 0; i < m; i++) {
        let tempArr = [];
        for (let j = 0; j < n; j++) {
            tempArr[j] = 0;
        }
        arr.push(tempArr);
    }

    while (i < indicesLength) {
        let row = indices[i][0];
        let col = indices[i][1];

        for (let j = 0; j < n; j++) {
            arr[row][j] += 1;

            if (arr[row][j] % 2 === 0) {
                oddCount--;
            } else {
                oddCount++;
            }
        }

        for (let j = 0; j < m; j++) {
            arr[j][col] += 1;
            if (arr[j][col] % 2 === 0) {
                oddCount--;
            } else {
                oddCount++;
            }
        }

        i++;
    }
    return oddCount;
};