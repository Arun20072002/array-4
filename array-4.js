document.write("separate the two digit number"+"<br>")
document.write("-----------------------------"+"<br>")

var a=[2,23,48,333,45]
var b=[];

for(let i=0;i<=a.length-1;i++){
    if(a[i]>=10 && a[i]<100){
        b.push(a[i]);
    }
}
document.write(b+"<br>")