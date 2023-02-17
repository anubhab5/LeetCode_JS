/**
 * 783. Minimum Distance Between BST Nodes
Easy
2.8K
382
company
Bloomberg
company
Amazon
company
Microsoft
Given the root of a Binary Search Tree (BST), return the minimum difference between the values of any two different nodes in the tree.

 

Example 1:


Input: root = [4,2,6,1,3]
Output: 1
Example 2:


Input: root = [1,0,48,null,null,12,49]
Output: 1
 

Constraints:

The number of nodes in the tree is in the range [2, 100].
0 <= Node.val <= 105
 

Note: This question is the same as 530: https://leetcode.com/problems/minimum-absolute-difference-in-bst/

Accepted
193K
Submissions
328K
Acceptance Rate
58.8%
Seen this question in a real interview before?
1/4
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDiffInBST = function (root) {
    let min = Infinity
    let previous = null
    const aux = (node) => {
        if (!node) {
            return
        }
        if (node.left) {
            aux(node.left)
        }
        const possibleMin = Math.abs(node.val - previous)
        if ((previous !== null) && (possibleMin < min)) {
            min = possibleMin
        }
        previous = node.val
        if (node.right) {
            aux(node.right)
        }
    }
    aux(root)
    return min
};