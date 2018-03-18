var Stack_lib = require('./stack')
var stack1_instance = new Stack_lib();
// here entire stack_lib gets called but this instance will only be created from Stack constructor,
// coz return type of stack_lib is Stack
stack1_instance.push("Bulbasaur");
stack1_instance.push("Charmander");
stack1_instance.push("Squirtle");
stack1_instance.display();
console.log("=====Taking out Squirtle");
stack1_instance.pop();
stack1_instance.display();
console.log("=====Adding Pikachu");
stack1_instance.push("Pikachu");
stack1_instance.display();
