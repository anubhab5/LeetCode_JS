/**
 * 1290. Convert Binary Number in a Linked List to Integer
Easy
3.4K
145
Oracle
JPMorgan
company
Amazon
Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.

Return the decimal value of the number in the linked list.

The most significant bit is at the head of the linked list.

 

Example 1:


Input: head = [1,0,1]
Output: 5
Explanation: (101) in base 2 = (5) in base 10
Example 2:

Input: head = [0]
Output: 0
 

Constraints:

The Linked List is not empty.
Number of nodes will not exceed 30.
Each node's value is either 0 or 1.
Accepted
360.4K
Submissions
437.6K
Acceptance Rate
82.4%
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {

    let arr = [];
    let value = 0
    while (head !== null) {
        arr.push(head.val);
        head = head.next;
    }

    for (let i = arr.length - 1, j = 0; i >= 0; i--, j++) {
        value += Math.pow(2, j) * arr[i];
    }

    return value;
};