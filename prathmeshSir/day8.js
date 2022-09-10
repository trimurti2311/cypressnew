// find max and min element of array 


let a=[1,4,2,8,7,0,22,93]
let max=a[0]//93
let min=a[0]//0
for(let i=0;i<a.length;i++){
    if(max<=a[i]){
        max=a[i]
    }
    if(min>=a[i]){
        min=a[i]
    }
}

// console.log(max,min)


function MaxMin(a){
    let max=a[0]
    let min=a[0]
    let n=a.length
    for(let i=0;i<n;i++){
        if(max<=a[i]){
            max=a[i]
        }
        if(min>=a[i]){
            min=a[i]
        }
    }
    console.log(max,min)
}

// MaxMin([3,-1,-4,86,3,44])
// MaxMin([4,-54,90,500])


// Find pair of elements in array with sum equal to k
//     0 1 2 3 4 5
let z=[3,2,6,3,7,0]


let k=9
let ii=undefined,jj=undefined
for(let i=0;i<z.length;i++){
    for(let j=0;j!=i,j<z.length;j++){
        if(z[i]+z[j]==k){
            ii=i//0
            jj=j//2
            break;
        }
    }
}

// console.log(ii,jj)//0,2


//Can a given array be made strictly increasing or not(based on current elements)

let d=[1,2,5,5,5,55,6,6,7]
// let f=[7,5,4,1]

let s=new Set(d)
if(s.size==d.length){
    console.log('Yes')
}
else{
    console.log('No')
}