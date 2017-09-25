
// Returning a new numbers-only array

function numbersOnly(arr){
    var newArr = []
    for (var i = 0; i < arr.length; i++){
        if (typeof arr[i] === "number"){
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);
}

// Removing non-numbers from a given array

function numbersOnly2(arr){
    for (var i = 0; i < arr.length; i++){
        if (typeof arr[i] === "number"){
            continue;
        }
        else{
            arr[i] = undefined;
        }
    }
    console.log(Arr);
}

// Truly removing non-numbers from a given array, while maintaining number order
// Starting from left, write numbers into incrementing arr[count] and pop the rest

function numbersOnly3(arr){
    var count = 0;
    for (var i = 0; i < arr.length; i++){
        if (typeof arr[i] == "number"){
            arr[count] = arr[i];
            count++;
        }
    }
    while (count > 0){
        arr.pop();
        count--
    }
}