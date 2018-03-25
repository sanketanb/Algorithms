var Queue_lib = require('./queue')
var queue1 = new Queue_lib();

queue1.enqueue("Bird");
queue1.enqueue("Magic");
queue1.enqueue("Jordan");
queue1.enqueue("Kobe");
queue1.enqueue("Shaq");
// console.log (queue1);
queue1.display();
console.log("=========You can stop waiting Bird");
queue1.dequeue();
queue1.display();