//find number in string

let str="12ssqw@434kl>50"
let k=''
for(let i=0;i<str.length;i++){
    if( Number(str[i])||str[i]=='0'){
        k+=str[i]
    }
}
console.log(k)


//using function

function findNum(st){
    let k=''
    for(let i=0;i<st.length;i++){
        if(Number(st[i])||st[i]=='0'){
            k+=st[i]
        }
    }
    console.log(k)
}
findNum('870^&r334@-1')

//filter out lowercase and uppercase

let r='bhg23#HfJK&8vv'
let p=''
let q=''
for(let j=0;j<r.length;j++){
    if((r[j]>='a' && r[j]<='z')){
        p+=r[j]
    }
    else if(r[j]>='A' && r[j]<='Z'){
        q+=r[j]
    }
}
console.log(p,q)


//using function

function luCase(rr){
    let p=''
let q=''
for(let j=0;j<r.length;j++){
    if((rr[j]>='a' && rr[j]<='z')){
        p+=r[j]
    }
    else if(rr[j]>='A' && rr[j]<='Z'){
        q+=rr[j]
    }
}
console.log(p,q)
}

luCase('bhg23#HfJK&8vv')





//hashing   -----access of element
//hashing means counting of particular element in array and  located at that position
//letm=[1,1,4,5,6,4,4,4,2,2,3]
//            0 1 2 3 4 5 6
//hashing===>[0 2 2 1 4 1 1]  //count

let arr=[1,1,4,5,6,4,4,4,2,2,3,0]
let mm=new Map()
console.log(mm)
//initilization equal to 0
for(let i=0;i<arr.length;i++){
    mm.set(arr[i],0)
}

for(let i=0;i<arr.length;i++){
    let c=mm.get(arr[i])
    c++
    mm.set(arr[i],c)
}
console.log(mm)


//
let names=["aa","hh","pp","aa","aa","pp"]
let o=new Map()
for(let i=0;i<names.length;i++){
    o.set(names[i],0)
}
console.log(o)
for(let i=0;i<names.length;i++){
    let x=o.get(names[i])
    x++
    o.set(names[i],x)
}
console.log(o)










