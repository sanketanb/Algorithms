// Bubble sort algo
var bigo = [5,4,3,2,1];
var bigomega = [1,2,3,4,5];

function bubbleSort(arr){
    var count = 0;
    do{
        var swapping = false;
        console.log("Start of big iteration #", count);
        console.log(arr);

        // bubble up the element
        for(var i=0;i<arr.length-1-count;i++){
            console.log("=== small iteration #", count);
            console.log(arr);

            if(arr[i]>arr[i+1]){
                swap(arr, i, i+1);
                swapping = true;
            }
        }
        console.log("End of big iteration #" + count);
        console.log(arr);
        console.log("\n");
        count ++;
    } while (swapping === true)
    return arr;
}


// function bubbleSort(arr){
//     for(var i=0;i<arr.length;i++){
//         console.log("start of big iteration #", i);
//         console.log(arr);
//         for(var j=0;j<arr.length-1-i;j++){
//             console.log("===== start of small iteration #", i);
//             console.log(arr);
//             if(arr[j]>arr[j+1]){
//                 swap(arr, j, j+1);
//             }
//         }
//         console.log("End of big iteration #" + i);
//         console.log(arr);
//         console.log("\n");
//     }
//     return arr;
// }

var swap = function(arr, indexOne, indexTwo){
    var temp = arr[indexOne];
    arr[indexOne] = arr[indexTwo];
    arr[indexTwo] = temp;
}

console.log("worst case for bubble sort");
console.log(bubbleSort(bigo));
console.log("\n")

console.log("best case for bubble sort");
console.log(bubbleSort(bigomega));
console.log("\n")

