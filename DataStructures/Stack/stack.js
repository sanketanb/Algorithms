// Below Stack variable represents the library
var Stack_lib = (function(){
    // Below Stack is my constructor
    function Stack(){
        this.dataStore = [];
        this.top = -1;
    }
        // we need to empty the array first 
        Stack.prototype.push = function(item){
            this.dataStore[++this.top] = item;
            // pre increment top index;
        }
        Stack.prototype.pop = function(){
            // post decrement top index;
            return this.dataStore[this.top--];
        }
        Stack.prototype.display = function(){
            // note: we are iterating for loop till top and not through dataStore
            // coz eventhough weare decrementing top index, memory location will have old value though its garbage value for stack
            // also if we still use datastore, we see all popped out elements. 
            for(var i=0; i<=this.top; i++){
                console.log(this.dataStore[i]);
            }
            console.log("top index is:", this.top);
        }
    return Stack;
})();

module.exports = Stack_lib;

