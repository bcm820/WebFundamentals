// Create a function that can take
// a start point,
// end point, and
// skip amount,
// to print all numbers in the range.
// (Should go UP TO, but NOT INCLUDING the end point)

// Bonus (Only If You Have Time):
// Make sure it works for negative numbers
// If the user doesn't pass a skip amount, make it default to 1
// If the user doesn't pass an end point, make range 0 to start

// NOTES:
// Conditioned negative range to decrement
// Skip amount 0 converts to 1
// If start > end, numbers switch
// If start == end, end increments by 4

function rangePrint(start, end, skip){
    if (skip == undefined){
        skip = 1;
    }
    if (skip == 0){
        skip = 1;
    }
    if (end == undefined){
        end = start;
        start = 0;
        skip = 1;
    }
    if ((end => 0) && (start => 0) && (start > end)){
        var temp = start;
        start = end;
        end = temp;
    }
    if (start == end){
        end = end + 4;
    }
    if (start <= 0 && end <= 0 && start > end){
        while (start > end){
            console.log(start);
            start = start - skip;
        }
    }
    else if (start <= 0 && end <= 0 && start < end){
        var temp = start;
        start = end;
        end = temp;
        while (start > end){
            console.log(start);
            start = start - skip;
        }
    }
    else if (start => 0) {
        while (start < end){
            console.log(start);
            start = start + skip;
        }
    }
}

console.log("Print range:")
rangePrint(2, 10, 2);

console.log("Decrement negative range")
rangePrint(-2, -10, 2);

console.log("Defaulting undefined skip amt to 1:")
rangePrint(4, 8);

console.log("Defaulting start to end of range:")
rangePrint(4);

console.log("Defaulting 0 skip amt to 1:")
rangePrint(4, 8, 0);

console.log("Start > End... switching order:")
rangePrint(10, 2, 2)

console.log("Start == End... counting upwards:")
rangePrint(8, 8, 1);

console.log("Negative Start < End... switching order:")
rangePrint(-2, -10, 2);