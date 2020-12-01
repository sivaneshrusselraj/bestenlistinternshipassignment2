function squareDigits(num){

    var numString=num.toString(),result=[];

    for (var i=0;i<numString.length;i++){

        result[i]=Math.pow(numString[i],2);

    }
    return Number(result.join(''));
    
}

document.write(squareDigits(2424));