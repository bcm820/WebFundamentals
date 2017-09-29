function mostSig(num){
    while (num < 1){
        num = num * 10;
    }
    var i = 1;
    while (num > Math.pow(10, i)){
        i++;
    }
    num = num / Math.pow(10, i-1);
    console.log(Math.floor(num));
}