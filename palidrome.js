
/*
// let word = "anna"
// let str = ""
// for (let i = 0; i < word.length; i++) {
//     str = str + word[i]
//     //console.log(str)
// }
// console.log(str)

// let worda = "anna"
// let stra = ""
// for (let i = worda.length - 1; i >= 0; i--) {
//     stra = stra + worda[i]
//     // //""=""+a
//     // //"a"="a"+"n"
//     // //"an"="an"+"n"
//     // //"ann"="ann"+"a"
//     console.log(stra)           //anna
// }



let word1 = "anna"
let str1 = ""
let str2=""
for (let i = 0; i < word1.length; i++) {
    str1 = str1 + word1[i]
    console.log(str1)
    str2 = word1[i] + str2
    console.log(str2)

}
///palidrome word code
let name="dad"
let arr=name.split('').reverse().join('')
arr==name ? console.log('name is palidrome'):console.log('name is not palidrome')

function palidrome(name){

//let name
let arr=name.split('').reverse().join('')
arr==name ? console.log('name is palidrome'):console.log('name is not palidrome')
}
palidrome(anna)*/


//"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""//
// pogram 2  find duplicate in array

function findDuplicate() {
    let array = [2, 4, 3, 5, 7, 6, 8]
    let resultToReturn = false
    for (let i = 0; i <= array.length; i++) {
        for (let j = 0; j <= array.length; j++) {
            //prevent the element from comparing with itself
            if (i !== j) {
                //check if element values are equal
                if (array[i] === array[j]) {
                    //duplicate element present
                    resultToReturn = true
                    break
                }
            }

        }
        if (resultToReturn) {
            break
        }

    }

    if (resultToReturn) {
        console.log('duplicate found')
    }
    else {
        console.log('duplicate not found')
    }
 }

findDuplicate()
















