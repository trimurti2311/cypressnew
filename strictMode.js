
//immediate invoke function
(function () {
   console.log("hi")
})()


//addition of two number display position

let z = [3, 4, 6, 7, 2, 1]
let k =9
let len = z.length
for (let i = 0; i < z.length; i++) {
   for (let j = 0; j != i, j < len; j++) {
      if (z[i] + z[j] == k) {
         console.log(i, j)
         break;
      }
   }

}
/*
////hashing 
let f=[1,1,1,1,3,3,3,5,6,6,6,3,2,2]
//max=6
//  0 1 2 3 4 5 6
   //[0,2,0,0,0,0,0]

let max=f[0]
for(let i=0;i<f.length;i++){
    if(max<=f[i]){
        max=f[i]
    }
}

let b=[]
for(let i=0;i<=max;i++){
    b.push(0)
}

for(let i=0;i<f.length;i++){
    b[f[i]]++
}

for(let i=0;i<b.length;i++){
//     if(b[i]!=0){
        console.log(i,'->',b[i])
//     }
 }*/

 //find difference in time 


let a=10,b=45
let c=7,d=59


// hh:mm
//convert into minute
let i=a*60+b//285
let j=c*60+d//611  // 326
let ans=0
if(i<=j){
    ans=j-i
}
else if(i>j){
    let total=24*60
    ans=total-(i-j)
}

let hour=Math.floor(ans/60)
let rem=ans%60

console.log(hour,':',rem)


function tme(a,b,c,d){
    let i=a*60+b//285
    let j=c*60+d//611  // 326
    let ans=0
    if(i<=j){
        ans=j-i
    }
    else if(i>j){
        let total=24*60
        ans=total-(i-j)
    }
    let hour=Math.floor(ans/60)
    let rem=ans%60

    console.log(hour,':',rem)
}


tme(12,34,1,35)
tme(5,55,14,12)