/**
 * 103. Binary Tree Zigzag Level Order Traversal
Medium
8.7K
229
company
Amazon
company
Bloomberg
company
Microsoft
Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).

 

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: [[3],[20,9],[15,7]]
Example 2:

Input: root = [1]
Output: [[1]]
Example 3:

Input: root = []
Output: []
 

Constraints:

The number of nodes in the tree is in the range [0, 2000].
-100 <= Node.val <= 100
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {

    if (!root) {
        return [];
    }
    
    let queue = [root];
    let level_order = [];
    let zigzag = true;

    // So we perform a normal iterative level order traversal.
    while (queue.length) {

        // This will be our row, it will store all the nodes for the row in the tree
        let row = [];
        let queue_len = queue.length;

        // So we're always going to invert the order of the rows.
        // We do this to create our zig zag effect.
        // Back, forward, back, forward, etc.
        zigzag = !zigzag;

        // We're going to get everything in the queue.
        // at this particular moment and nothing more.
        for (let counter = 0; counter < queue_len; counter++) {

            // Grab the current node by removing it off the end of the queue
            let node = queue.pop();
            
            if (zigzag) {
                row.unshift(node.val);
            } else {
                row.push(node.val);
            }

            // Add to the queue. 
            node.left ? queue.unshift(node.left) : null;
            node.right ? queue.unshift(node.right) : null;
        }

        // Push to the level_order array.
        level_order.push(row);
    }

    // Return the level_order array.
    return level_order;
};