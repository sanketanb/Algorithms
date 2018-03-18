// Insertion sort algo
var bigo = [5,4,3,2,1];
var bigomega = [1,2,3,4,5];

var insertionSort = function(arr){
    for(var i=1; i<arr.length; i++){
        var element = arr[i];
        var j;
        for(j=i; j>0 && arr[j-1]>element; j--){
            // we move the higher element to right and insert element to left
            arr[j]=arr[j-1];
        }
        arr[j] = element;
    }

    // explanation for why we need j>0 since js does not throw exception for not putting this condition
    // if(arr[-1]>0){
    //     console.log("anything compared to undefined is false");
    // }
    // if(arr[-1]<0){
    //     console.log("other languages will throw array index out of bound exceeption");
    // }
    return arr;
}


console.log("worst case for insertion sort");
console.log(insertionSort(bigo));
console.log("\n")

console.log("best case for insertion sort");
console.log(insertionSort(bigomega));
console.log("\n")
