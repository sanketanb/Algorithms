Part 1:
Create a Node class that consists of two properties, element, which stores the node’s data, and next, which stores a link to the next node in the linked list.

Part 2:
Create a SinglyLinkedList class that consists of one property: head. This property is a node to represent the head of the list which can be created with new Node(“head”)

Part 3:
The first function we will add to the SinglyLinkedList’s prototype is the insert function which inserts a node into a list. To insert a new node, you have to specify which node you want to insert the node after. To do this, we create a helper function, find, which searches through the linked list looking for the specified data. When this data is found, the function returns the node storing the data.

Part 4:
Once the “after” node is found, the new node is inserted into the linked list. First, the new node’s new property is set to the value of the next property of the “after” node. Then the “after” node’s next property is set to reference to the new node. Think about why this sequence is important. Now create the insert function utilizing the find helper function.

Part 5:
Now let’s test our linked list code. To do that we need a function called display that will display the elements of a linked list

Part 6:
In order to remove a node from a linked list, we need to find the node that is just before the node we want to remove. Once we find that node, we change its next property to no longer reference the removed node, and the previous node is modified to point to the node after the removed node. We can define a function, findPrevious(), to perform this task. This function traverses the linked list, stopping at each node to see if the next node stores the data that is to be removed. When the data is found, the function returns this node (the "previous" node), so that its next property can be modified.

Part 7:
Now using the findPrevious helper function that we wrote, implement a remove function that takes in the value of the node that you want to delete, and deletes it from the linked list.