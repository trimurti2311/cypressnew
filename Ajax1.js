let info = {
    "page": 2,
    "per_page": 6,
    "total": 12,
    "total_pages": 2,
    "data": [
        {
            "id": 7,
            "email": "michael.lawson@reqres.in",
            "first_name": "Michael",
            "last_name": "Lawson",
            "avatar": "https://reqres.in/img/faces/7-image.jpg"
        },
        {
            "id": 8,
            "email": "lindsay.ferguson@reqres.in",
            "first_name": "Lindsay",
            "last_name": "Ferguson",
            "avatar": "https://reqres.in/img/faces/8-image.jpg"
        },
        {
            "id": 9,
            "email": "tobias.funke@reqres.in",
            "first_name": "Tobias",
            "last_name": "Funke",
            "avatar": "https://reqres.in/img/faces/9-image.jpg"
        },
        {
            "id": 10,
            "email": "byron.fields@reqres.in",
            "first_name": "Byron",
            "last_name": "Fields",
            "avatar": "https://reqres.in/img/faces/10-image.jpg"
        },
        {
            "id": 11,
            "email": "george.edwards@reqres.in",
            "first_name": "George",
            "last_name": "Edwards",
            "avatar": "https://reqres.in/img/faces/11-image.jpg"
        },
        {
            "id": 12,
            "email": "rachel.howell@reqres.in",
            "first_name": "Rachel",
            "last_name": "Howell",
            "avatar": "https://reqres.in/img/faces/12-image.jpg"
        }
    ],
    "support": {
        "url": "https://reqres.in/#support-heading",
        "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
    }
}

// console.log(info)
// info.data.forEach(function(el){
//     //console.log(el)
//     for(let keys in el){
//         console.log(keys,el[keys])
//     }
// })

let renderHtml = function (el) {

    let obj = document.querySelector('#container')
    let html = `<li>
   <p>${el.id}</p>
   <p>${el.email}</p>
   <p>${el.first_name}</p>
   <p>${el.last_name}</p>
   <img src="${el.avatar}">
</li>
`
    obj.insertAdjacentHTML('beforeend', html)
}

info.data.forEach(function (element) {
    // renderHtml(element)
})

//using promises

let cn = document.querySelector('#container')
function renderHtml2(users) {

    users.forEach(function (el) {
        let Html = `<div>
<p>${el.id}</p>
   <p>${el.email}</p>
   <p>${el.first_name}</p>
   <p>${el.last_name}</p>
   <img src="${el.avatar}">
</div>`
        cn.insertAdjacentHTML('beforeend', Html)
    })
}
function getusers() {
    fetch("https://reqres.in/api/users?page=2")
        .then(function (res) {
            //console.log(res)
            res.json()
                .then(function (response) {
                    // console.log(response)
                    let info = response.data
                    //console.log(info)
                    renderHtml2(info)
                })
        })

}
getusers()







// let input=[
    
// ]
// function render(client){
//     let div=document.querySelector("#container")
// client.forEach(function(el){
//     let ele=`<div>
//    <P>${el.id}</P>
//    <P>${}</P>
//    <p>${}

//    </p>
// <P>${}</P>
// <P></P>



//     </div>`
//     })
// }







