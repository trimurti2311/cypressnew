//asynchronous code and syn code

function add(a, b) {
    let c1 = a + b
    console.log(c1)
}
//add(4,7)

// asynch code async execution

function addition(a, b) {
    setTimeout(function () {
        let c = a + b
        console.log(c)
    }, 4000)

    setTimeout(function () {
        let d = a + b
        console.log(d)
    }, 2000)

}
//addition(4, 7)
//addition(6, 8)

// way to asynch into synch  execute 
//call back hell
//promises
// async  await function

//call back hell

function getuser() {
    setTimeout(() => {
        console.log('createUser')
        setTimeout(() => {
            console.log('getId')
            setTimeout(() => {
                console.log('getInfo')

            }, 1000);
        }, 2000);

    }, 3000);
}
//getuser()

//promises
// only write the promise
let getInfo=new Promise(function(resolve,reject){
let a=20
let b=20
if(a==b){
    resolve ('hi')
}
else{
    reject('bye')
}

})
// consume promise 
// getInfo.then(function(str){
//     console.log(str)
// },function(str){
//     console.log(str)

// })


//promise consume
// getInfo.then(function(str){
//     console.log(str)
// }).catch(function(str){
//     console.log(str)
// }).finally(function(){
//     console.log('i alwayss run')
// })


// same code written with seperate function

 function getnewUser(){
    return new Promise(function(resolve,reject){
        resolve ("retrive new user")
    })
 }

function getnewId(){
    return new Promise(function(resolve,reject){
        resolve ("get Id of new user")
    })
 }


 function getnewInfo(){
    return new Promise(function(resolve,reject){
        resolve ("get Info of new user")
    })
 }

//  getnewUser().then(function(res){
//     console.log(res)
//     return getnewId()
//  }).then(function(res1){
//     console.log(res1)
//     return getnewInfo()
//  }).then(function(res2){
//     console.log(res2)
//  }).finally(function(){
//     console.log('i always run')
//  })

//async await function

let  getall=async function(){
let retrive= await getnewUser()
console.log(retrive)
let id= await getnewId()
console.log(id)
let information= await getnewInfo()
console.log(information)
}
getall()