var SinglyLinkedList = require('./singly');

var sll = new SinglyLinkedList();
sll.insert(6, "head");
sll.insert(5, 6);
sll.insert(3, 5);
sll.insert(1, 3);
sll.insert(8, 1);
sll.insert(7, 8);
sll.insert(2, 7);
sll.insert(4, 2);
sll.display();
console.log("=== sorted below ===")
function mergeSortLinkedList(sll) {
    nodeCount = sll.nodeCount()
    if(nodeCount < 2){
        return sll;
    }
    var left = new SinglyLinkedList();
    var right = new SinglyLinkedList(); 

    var currentLeftNode = left.head;
    var currentRightNode = right.head;
    var currentListNode = sll.head;
    
    for(var i=0; i<nodeCount; i++){
        if(i<nodeCount/2){
            // we need to "SKIP" head hence we do ListNode.next
            left.insert(currentListNode.next.element, currentLeftNode.element);
            currentLeftNode = currentLeftNode.next;

        }else{
            right.insert(currentListNode.next.element, currentRightNode.element);
            currentRightNode = currentRightNode.next;
        }
        // here we actually "MOVE" to next of ListNode
        currentListNode = currentListNode.next;
    }
    return mergeLinkedLists(mergeSortLinkedList(left), mergeSortLinkedList(right));
}

function mergeLinkedLists(left, right) {
    var output = new SinglyLinkedList()
    var currentOutput = output.head;
    
    var runnerLeft = left.head.next;
    var runnerRight = right.head.next;
    // if both runners not null
    while(runnerLeft && runnerRight){
        if(runnerLeft.element < runnerRight.element){
            output.insert(runnerLeft.element, currentOutput.element);
            runnerLeft = runnerLeft.next;
        }else{
            output.insert(runnerRight.element, currentOutput.element);
            runnerRight = runnerRight.next;
        }
        currentOutput = currentOutput.next;
    }
    while(runnerLeft){
        output.insert(runnerLeft.element, currentOutput.element);
        runnerLeft = runnerLeft.next;
        currentOutput = currentOutput.next;
    }
    while(runnerRight){
        output.insert(runnerRight.element, currentOutput.element);
        runnerRight = runnerRight.next;
        currentOutput = currentOutput.next;
    }
    return output;

}

var answer = mergeSortLinkedList(sll);
answer.display();
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8

