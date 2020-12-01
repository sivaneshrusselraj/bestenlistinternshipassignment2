var randomNo = function(min,max){

    let num= Math.floor(Math.random()*max)+min;

    return num;
}
var number = randomNo(200000,400000);

document.write(number);