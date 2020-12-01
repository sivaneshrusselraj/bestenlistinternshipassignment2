function secondLargest(arr){
    var max1=arr[0];
    var max2=0;
    for(var i=0;i<arr.length;i++){
        if(arr[i]>max1){
            max2=max1;
            max1=arr[i];
        }
        else if(arr[i]>max2 && arr[i]!==max1)
        {
            max2=arr[i];
        }       
    }
    return max2;
}
document.write(secondLargest([20,30,40,50,60,70]));