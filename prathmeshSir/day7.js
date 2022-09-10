// check if the array is sorted or not 


//a<=b<=c<=d<=e<=f
//a>=b>=c>=d>=e>=f
//     0 1  2   3
// let a=[1,3,3,4]
// let n=a.length
// let s=0;
// for(let i=0;i<n-1;i++){
//     if(a[i]>a[i+1]){
//         s=1
//         console.log('Not sorted')
//         break;
//     }
// }
// if(s==0){
//     console.log('sorted')
// }



// function abc(a){
//     let m=a.length
//     let s=0;
//     for(let i=0;i<m-1;i++){
//         if(a[i]>a[i+1]){
//             s=1
//             break;
//         }
//     }
//     if(s==0){
//         console.log('sorted')
//     }
//     else if(s==1){
//         console.log('Not sorted')
//     }
    
// }
// let g=[1,3,5,7,9,11]
// // let x=abc(g)


// // decreasing order ----->

// function xyz(a){
//     let m=a.length
//     let s=0;
//     for(let i=0;i<m-1;i++){
//         if(a[i]<a[i+1]){
//             s=1
//             break;
//         }
//     }
//     if(s==0){
//         console.log('sorted')
//     }
//     else if(s==1){
//         console.log('Not sorted')
//     }
    
// }
// let c=[5,4,3,2,1]
// xyz(c)


let f=[4,3,2,1,10]
let vv=[1,2,3,4]
let gg=[-4,-5,-6]
function pqr(a){
    let m=a.length
    let s=0,t=0
    for(let i=0;i<m-1;i++){
        if(a[i]<a[i+1]){
            s=1
            break;
        }
    }
    for(let i=0;i<m-1;i++){
        if(a[i]>a[i+1]){
            t=1
            break;
        }
    }
    if(s==0||t==0){
        console.log('sorted')
    }
    else{
        console.log('Not sorted')
    }

}
// pqr(f)
// pqr(vv)
// pqr(gg)


// find count of a particular element in array 


let target =4
let count=0;
let aa=[1,2,44,4,4,4,2,3,3,4,4,4,4,0]

for(let j=0;j<aa.length;j++){
    if(aa[j]==target){
        count++
    }
}

// console.log(count)

function check(a,t){
    let m=a.length
    let c=0
    for(let i=0;i<m;i++){
        if(a[i]==t){
            c++
        }
    }
    return c
}

let p=[1,2,2,2,2,2,2,2,4,3,3,43,21]
let q=[1,4,5,5,5,7,7,7]
let h=['Hello','a','b','a','a','a']

let a1=check(p,2)
let a2=check(q,1)
let a3=check(h,'a')
console.log(a1,a2,a3)