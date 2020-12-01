var browser=["Chrome", "Microsoft Edge","firefox","opera","uc","safari"];
let b=[]
let ua =navigator.userAgent;
 
for(let i=0;i<browser.length;i++){
    if(ua.indexOf(browser[i])>-1){
        b=browser[i];
        break;

    }
} 
if (b=="opera" || b=="uc" ||b=="safari"){
    b="internet explorer";
}
console.log(b);