/*
 * This is in the order of O[n^2] 
 */
function howMuchToAsk(c, p) {
    /*
     * Return the amount the cashier should ask the customer or -1 if this exceeds 9.
     */
    var sub;
    var bills_arr = [20, 50, 100, 200, 500, 1000];
    sub = p-c;
    for(var i=0; i<10; i++){
        for(var j=bills_arr.length-1; j>=0; j--){
            if((sub+i) == bills_arr[j]){
                return i;
            }
        }
    }
    return -1;
}
function howMuchToAsk(c, p) {
    /* This is in the order of O[n]
     * Return the amount the cashier should ask the customer or -1 if this exceeds 9.
     */
    var sub;
    sub = p-c;
    var bills_arr = [20, 50, 100, 200, 500, 1000];
    var i;
    for(i=0; i<10; i++){
        if((sub+i) % 10 === 0){
            break;
        }
    }
    // note: we are doing equals bills instead of mod =0 the shopkeeper can return only 1 bill
    for(var j=bills_arr.length-1; j>=0; j--){
        if((sub+i) == bills_arr[j]){
           return i;
        }
    }
    return -1;
}