Write a function, reverseList, that takes in the head of a linked list as an argument. The function should reverse the order of the nodes in the linked list in-place and return the new head of the reversed linked list.

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// a <- b <- c <- d <- e <- f
// null <- a <- b <- c <- d <- e <- f
//b -> a -> c -> d -> e -> f -> null
//b -> 
reverseList(a); // f -> e -> d -> c -> b -> a

//1. iterate through list until currentNode.next === null
//2. if currentNode.next !== null, currentNode.next = currentNode.next.next = currentNode (a -> c)
//3. currentNode.next.next = currentNode (b -> a - > c)


function reverseLinkedList(linkedList){
    let currentNode = linkedList.head
    while(currentNode.next  !== null){
        let nextNode = currentNode.next
        currentNode.next = nextNode.next
        nextNode.next = linkedList.head
        linkedList.head = nextNode
    }
    linkedList.tail = currentNode
    return linkedList
}

const reverseList = (head) => {
  let current = head;
  let prev = null;
  while (current !== null) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};