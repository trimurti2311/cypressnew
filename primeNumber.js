//prime number program

let num = 10
let count = 0
for (let i = 2; i < num; i++) {
    if (num % i == 0) {
        count = 1
        break
    }

}
if (count == 1) {
    console.log('num is not primeNumber')
}
else if (count == 0) {
    console.log('num is  primeNumber')
}

/*****************************************/
//prime number program with function
function prime(n) {
    let count1 = 0
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            count1 = 1
            break
        }
    }
    if (count1 == 1) {
        console.log('num is not primeNumber')
    }
    else if (count1 == 0) {
        console.log('num is  primeNumber')
    }
}
prime(2)
prime(15)
prime(11)
prime(13)


//third way to find prime number
function primeN(n) {
    let count11 = 0
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            count11 = 1
            break
        }
    }
    if (count11 == 1) {
        //console.log('num is not primeNumber')
        return false
    }
    else if (count11 == 0) {
        // console.log('num is  primeNumber')
        return true
    }
}


let number = 10
for (let i = 2; i <= number; i++) {
    if (primeN(i)) {
        console.log(i)
    }
}
/*
//count and sum of prime number
function primeN(n) {
    let cc = 0
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            cc = 1
            break
        }
    }
    if (cc == 1) {
        //console.log('num is not primeNumber')
        return false
    }
    else if (cc == 0) {
        // console.log('num is  primeNumber')
        return true
    }
}
let number1 = 10
let sum = 0
for (let i = 2; i <= number1; i++) {
    if (primeN(i)) {
        console.log(i)
        cc++
        sum += i
    }
}
console.log(cc, sum)*/

/*******************************************************************************/
//star problems

//program 1
for (let i = 5; i > 0; i--) {
    let s = ''
    for (let j = 0; j <= 5; j++) {
        if (j >= i) {
            s += '* '
        }
        else {
            s += ''                                                   
        }
    }
    console.log(s)
}
//      *
 //     * *
 //     * * *
 //     * * * *
 //     * * * * *
//program 2
for (let i = 4; i > 0; i--) {
    let s = ''
    for (let j = 0; j <= 4; j++) {
        if (j >= i) {
            s += ' *'
        }
        else {
            s += ''
        }
    }
    console.log(s)
}
//      *
 //     * *
 //     * * *
 //     * * * *

//   program 3)
for (let i = 0; i <= 5; i++) {
    let s = ''
    for (let j = 5; j >= 0; j--) {
        if (j > i) {
            s += '*'
        }
        else {
            s += ''
        }
    }
    console.log(s)
}
// *****
// ****
// ***
// **
// *

//program 4)
//WRONG
// for(let i=4;i>=1;i--){

//     let s=''
//     for(let j=i;j>=i;j--){
//         s+='* '
//     }
//     console.log(s)
// }

// program 5)

for (let i = 1; i <= 5; i++) {
    console.log('*'.repeat(i))
}

// *
// **
// ***
// ****
// *****

/*******************************************************************************/

//factorial number 
////simple for loop
let nn = 4
let counter = 1
for (let i = nn; i >= 1; i--) {
    counter = counter * i
}
console.log(counter)


//using function
function fact(nn) {
    let counterf = 1
    for (let i = nn; i >= 1; i--) {
        counterf = counterf * i
    }
    console.log(counterf)
}
fact(5)
fact(10)

//    another way to calculate factorial
function recur(m) {
    if (m <= 1) {
        return m
    }
    return m * recur(m - 1)
}
let factorial = recur(4)
console.log(factorial)


/*******************************************************************************/
// fabonacci series

//0 1 1 2 3 5 8 13
//first and second term always 0 and 1
// next term=(previous term) + (before previous term)
//3rd term=0+1=1
//4th term=1+1=2

let aank = 5
let a = 0;
let b = 1;
console.log(a)
console.log(b)
for (let i = 3; i <= 5; i++) {                    //here i=3 used for third term calculation
    let c = a + b
    console.log(c)
    a = b                         //update value of a with value of b
    b = c                         //update value of b with value of c
}

// using function 
function fabSeries(num) {

    let a = 0;
    let b = 1;
    console.log(a)
    console.log(b)
    for (let i = 3; i <= num; i++) {                    //here i=3 used for third term calculation
        let c = a + b
        console.log(c)
        a = b                         //update value of a with value of b
        b = c                         //update value of b with value of c
    }
}
fabSeries(7)

    /*******************************************************************************/

//pattern problem
let k=1
for(let i=1;i<=4;i++){
    let s=''
    for(let j=1;j<=i;j++){
        s+=k+''
        k++
    }
    console.log(s)
}

//let k=1
// for(let i=1;i<=4;i++){
//   let s=''
//   for(let j=1;j<=i;j++){
//     s+=k+' '
//     k++
//   }
//   console.log(s)
// }

















