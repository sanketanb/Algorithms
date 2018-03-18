// Selection sort algo
var bigo = [5,4,3,2,1];
var bigomega = [1,2,3,4,5];
  
var selectionSort = function(arr){
    for(var i=0; i<arr.length; i++){
        var minIndex = i;
        console.log("Start of big iteration");
        console.log(arr);

        // we can start with j=i as well
        for(var j=i+1; j<arr.length; j++){
            console.log("===small iteration");
            console.log(arr);

            if (arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        if (minIndex !== i){
            swap(arr, minIndex, i);
        }
        console.log("End of big iteration");
        console.log(arr);
        console.log("\n")
    }
    return arr;
}

var swap = function(arr, indexOne, indexTwo){
    var temp = arr[indexOne];
    arr[indexOne] = arr[indexTwo];
    arr[indexTwo] = temp;
}
// console.log(selectionSort([34, 23, 12, 45, 9, 1, 24]));

console.log("worst case for selection sort");
console.log(selectionSort(bigo));
console.log("\n")

console.log("best case for selection sort");
console.log(selectionSort(bigomega));
console.log("\n")