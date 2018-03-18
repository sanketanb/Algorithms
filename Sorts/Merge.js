var bigomega1 = [1,2,3,4];
var bigomega2 = [6,7,8,9,10];

/*
pseudo code:
input 2 arrs
declare:
for loop to merge sorted array into new arr

*/
function merge(arr1_sorted, arr2_sorted){
    var merged_arr = [];
    var i = 0;
    var j = 0;
    while(i<arr1_sorted.length && j<arr2_sorted.length){
        if(arr1_sorted[i]<arr2_sorted[j]){
            merged_arr.push(arr1_sorted[i]);
            i++;
        }else{
            merged_arr.push(arr2_sorted[j]);
            j++;
        }
    }
    while(i<arr1_sorted.length){
        merged_arr.push(arr1_sorted[i]);
        i++;
    }
    while(j<arr2_sorted.length){
        merged_arr.push(arr2_sorted[j]);
        j++;
    }
    
    return merged_arr;
}

// console.log(merge(bigomega1,bigomega2));

var unsorted_arr1 = [4,9,7,10,6];
var unsorted_arr2 = [11,5,2,0,7];

function mergeSort(input_arr){
    if(input_arr.length === 1){
        return input_arr;
    }

    var middle = Math.floor(input_arr.length/2)
    var left_arr = input_arr.slice(0,middle);
    var right_arr = input_arr.slice(middle);
   
    return merge((mergeSort(left_arr)), (mergeSort(right_arr)));
}

console.log("Unsorted array:", unsorted_arr1)
console.log(mergeSort(unsorted_arr1));
/*
[4,9,7,10,6]
[4,9]   [7,10,6]
[4][9]  [7]      [10,6]
[4,9]   [7]      [10] [6]
                [6,10]
            [6,7,10]
    [4,6,7,9,10]
*/