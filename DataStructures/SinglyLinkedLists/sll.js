// Creating Node class. Here is js both are same
function Node(element){
    this.element = element;
    this.next = null;
}

function SinglyLinkedList(){
    // Note: we are creating SLL with first node of default value as head here
    this.head = new Node("head");
}

SinglyLinkedList.prototype.find = function(element){
    var runnerNode = this.head;
    // while(runnerNode.next){
    //     if(runnerNode.element == element){
    //         break;
    //     }
    //     runnerNode = runnerNode.next;
    // }
    // we can do this by few ways. Below is more readable
    while(runnerNode.element !== element){
        runnerNode = runnerNode.next;
    }
    return runnerNode;
}

SinglyLinkedList.prototype.insert = function(newElement, element){
    var previousNode = this.find(element);
    
    var newNode = new Node(newElement);
    newNode.next = previousNode.next;
    previousNode.next = newNode;

}

SinglyLinkedList.prototype.display = function(){
    // we do this.head.next to skip displaying head element value;
    var runnerNode = this.head.next;
    while(runnerNode !== null){
        console.log("current element is: ", runnerNode.element);
        runnerNode = runnerNode.next;
    }
}

SinglyLinkedList.prototype.findPrevious = function(element){
    var runnerNode = this.head;
    while(runnerNode.element !== element){
        var previousNode = runnerNode;
        runnerNode = runnerNode.next;
    }
    return previousNode;

    // // Or we can do this another way considering edge case
    // while(runnerNode.next !== null && runnerNode.next.element!== element){
    //     runnerNode = runnerNode.next;
    // }
    // return runnerNode; 
}

SinglyLinkedList.prototype.remove = function(element){
    var previousNode = this.findPrevious(element);
    var deleteNode = previousNode.next;
    var afterNode = previousNode.next.next;

    previousNode.next = afterNode;
    deleteNode.next = null;

}

var cities = new SinglyLinkedList();
cities.insert("LA", "head");
cities.insert("SFO", "LA");
cities.insert("Seattle", "SFO");
cities.display();

console.log("~~~~~~~");
var basketballTeams = new SinglyLinkedList();
basketballTeams.insert("Lakers", "head");
basketballTeams.insert("Blazers", "Lakers");
basketballTeams.insert("Celetics", "Blazers");
basketballTeams.insert("Kings", "Celetics");
basketballTeams.display();
console.log("========Removing Celetics");
basketballTeams.remove("Celetics");
basketballTeams.display();