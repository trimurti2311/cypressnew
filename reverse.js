//reverse array program

// let a=[1,2,3,4,5,6,7]
// let n=a.length
// for(let i=0,j=n;i<=n/2,j>=n/2;i++,j--){
// let c=a[i]
// a[i]=a[j]
// a[j]=c
// }
// console.log(a)

// //sort positive and negative number

// let b=[1,2,-4,3,-98,78,90]
// let posi=[]
// let nega=[]
// for(let i=0;i<b.length;i++){
//     if(b[i]>0){
//         posi.push(b[i])
//     }
//     else{
//         nega.push(b[i])
//     }
// }
// console.log(posi,nega)
// if(posi.length>nega.length){
//     console.log('positive')
// }
// else if(posi.length==nega.length){
//     console.log('equal')
// }

// /// sort array

// let alpha=['a','aa','dss','hd','ab','cd']
// let names=['aky','ary','hey','all','hello','hand']
// alpha.sort()
// names.sort()
// console.log(alpha)
// console.log(names)

// // another way of sort
// let x=[2,3,65,21,38,-21]
// for(let i=0;i<x.length;i++){
//     for(let j=0;j<x.length;j++){
//         if(x[i]<x[j]){
//             let s=x[i]
//             x[i]=x[j]
//             x[j]=s
//         }
//     }
// }
// console.log(x)


//check if array is sorted or not
///asending order

let number = [1, 2, 3, 4, 5]
let l = number.length
let s = 0
for (let i = 0; i < l - 1; i++) {
    if (number[i] > number[i + 1]) {
        s = 1
        console.log('not sorted')
        break;
    }
}
if (s == 0) {
    console.log("sorted")
}


//using function

function asend(arr) {
    let len = arr.length
    let s = 0
    for (let i = 0; i < len - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            s = 1
            console.log('not sorted')
            break;
        }
    }
    if (s == 0) {
        console.log("sorted")
    }


}


asend([6, 7, 8, 9, 11])
asend([16, 7, 8, 9, 11])

//check if array is sorted or not in decending order

let even = [12, 10, 8, 6, 4, 2]
let m = even.length
let q = 0
for (let i = 0; i < m - 1; i++) {
    if (even[i] < even[i + 1]) {
        q = 1
        console.log("not sorted")
        break;
    }
}
if (q == 0) {
    console.log("sorted")
}


//using function decending order

function decending(odd) {
    let m = odd.length
    let q = 0
    for (let i = 0; i < m - 1; i++) {
        if (odd[i] < odd[i + 1]) {
            q = 1
            console.log("not sorted")
            break;
        }
    }
    if (q == 0) {
        console.log("sorted")
    }
}
decending([12, 10, 8, 6, 4, 2])
decending([12, 10, 24, 4, 22])


//combine  asending and decending
let aa = [-23, -2, 4, 8, 40]
let bb = [23, 56, 76, -123, 230]
let cc = [-2, -4, -76, -243]
function asendDecend(p) {
    let ll = p.length
    let s = 0, t = 0
    for (let i = 0; i < ll - 1; i++) {
        if (p[i] < p[i + 1]) {
            s = 1
            break;
        }
    }
    for (let i = 0; i < ll - 1; i++) {
        if (p[i] > p[i + 1]) {
            t = 1
            break;
        }
    }

    if (s == 0 || t == 0) {
        console.log("sorted")
    }
    else {
        console.log('Not sorted')
    }
}

asendDecend(aa)
asendDecend(bb)
asendDecend(cc)

// find count of a particular element in array
let target = 5
let count = 0
let aaa = [10, 5, 5, 6, 5, 5, 55, 5, 8, , 9, 20, 5]
for (let j = 0; j <= aaa.length - 1; j++) {
    if (aaa[j] == target) {
        count++
    }
}
console.log(count)

//using function
let r = [4, 56, 44, 4, 7, 9, -4, 4, 6, 4]
let s1 = [-1, 8, -3, -1, -1, -1]

function targetFind(q, targetN) {
    let count = 0

    for (let j = 0; j <= q.length - 1; j++) {
        if (q[j] == targetN) {
            count++
        }
    }
    console.log(count)
}
targetFind(r, 4)
targetFind(s1, -1)

// find max and min element of array 

let num=[22,33,104,15,68,93]
let max=num[0]
let min=num[0]
for(let i=0;i<num.length;i++){
    if(max<=num[i]){
        max=num[i]
    }
    else if(min>=num[i]){
        min=num[i]
    }
   
}
console.log(max,min)


// using function
let bigNum=[67,-12,34,89,98,92]
function MaxMin(z){
    let max=z[0]
    let min=z[0]
    for(let i=0;i<z.length;i++){
        if(max<=z[i]){
            max=z[i]
        }
        else if(min>=z[i]){
            min=z[i]
        }
       
    }
    console.log(max,min)  
}
MaxMin(bigNum)


//Can a given array be made strictly increasing or not(based on current elements)

let d=[1,2,5,5,5,55,6,6,7]
let set=new Set(d)
if(set.size==d.length){
    console.log("yes")

}
else{
    console.log("No")
}
