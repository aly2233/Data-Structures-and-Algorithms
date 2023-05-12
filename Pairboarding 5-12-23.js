Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

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
 * @return {boolean}
 */

 

//use bfs to traverse the tree
//if root = null, return true
//initialize a queue containing root.left and root.right
//use a while loop while the queue is greater than 0, not empty
//set leftNode = queue.shift
//set rightNode = queue.shift
//if the values are not the same, return false
//check if one side is null, but the other is not then we return false
//if both sides are null, then we continue

//push leftNode.left and rightNode.right
//push leftNode.right and rightNode.left

//return true


var isSymmetric = function(root) {
  if (root === null) return true;
  let queue = [root.left, root.right];
  while (queue.length > 0) {
    let left = queue.shift();
    let right = queue.shift();
    if (left === null && right === null) continue;
    if (left === null || right === null || left.val !== right.val) {
      return false;
    }
    queue.push(left.left, right.right);
    queue.push(left.right, right.left);
  }
  return true;
};

Input: root = [1,2,2,3,4,4,3]
Output: true

queue = []
left = 4
right = 4



/*Write a function, longestStreak, that takes in the head of a linked list as an argument. 
The function should return the length of the longest consecutive streak of the same value within the list.

const a = new Node(5);
const b = new Node(5);
const c = new Node(7);
const d = new Node(7);
const e = new Node(7);
const f = new Node(6);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// 5 -> 5 -> 7 -> 7 -> 7 -> 6

longestStreak(a); // 3
*/

/* var longestStreak, keeps track of longest streak
 * var currentStreak, keeps track of current streak
 * var currentStreakVal = value of first node
 * head = head.next
 * for each element in linked list
 * 		if head.val === currentStreakVal
 * 				currentStreak++
 * 				longestStreak = max(longestStreak, currentStreak)
 *		else currentStreak = 0
 * 		head = head.next
 * return longestStreak
 */

//5 -> 5 -> 7 -> 7 -> 7 -> 6
//resultLen = 3
//currentStreakLen = 1
//currentStreakVal = 6
//head = 6

var longestStreak(head) {
  if (!head) {
    return 0;
  }
  var resultLen = 1;
  var currentStreakLen = 1;
  var currentStreakVal = head.val;
  head = head.next;
  while (head !== null) {
    if (head.val === currentStreakVal) {
      currentStreakLen++;
      resultLen = Math.max(resultLen, currentStreak);
    } else {
      currentStreakLen = 1;
      currentStreakVal = head.val;
    }
    head = head.next;
  }

  return resultLen;
}
