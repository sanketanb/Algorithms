var bigo = [5,4,3,2,1];
var bigomega = [1,2,3,4,5];

/* pseudo code: 
input arr
declare pivot, left, right
for loop/while loop to sort in left and right
return recursion
 */
function quickSort(arr){
    if(arr.length <= 1){
        return arr;
    }
    var pivot =arr[0];
    var left = [];
    var right = [];
    for(var i=1; i<arr.length;i++){
        if(arr[i] < pivot){
            left.push(arr[i]);
        }else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat((pivot),quickSort(right));
}

console.log("input array of big o: ", bigo);
console.log(quickSort(bigo));

console.log("input array big omega: ", bigomega);
console.log(quickSort(bigomega));