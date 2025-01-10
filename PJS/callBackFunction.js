
// let cardsWrapper = document.getElementById('cardsWrapper');
// let isLoading = document.getElementById('isLoading');

// function post1(call) {
//     isLoading.innerHTML = 'Loading...'
//     // isLoading.classList.add('loader')
//     setTimeout(() => {
//         cardsWrapper.innerHTML += `
//         <div class="card">
// <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp" class="card-img-top" alt="Fissure in Sandstone"/>
// <div class="card-body">
// <h5 class="card-title">Post 1</h5>
// <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
// <a href="#!" class="btn btn-primary" data-mdb-ripple-init>Button</a>
// </div>
// </div>
//         `
//         isLoading.innerHTML = ''
//         // isLoading.classList.remove('loader')
//         call();
//     }, 6000)
// }



// function post2(call) {
//     setTimeout(() => {
//         cardsWrapper.innerHTML += `
//         <div class="card">
// <div class="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
// <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/111.webp" class="img-fluid"/>
// <a href="#!">
//   <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
// </a>
// </div>
// <div class="card-body">
// <h5 class="card-title">Post 2</h5>
// <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
// <a href="#!" class="btn btn-primary" data-mdb-ripple-init>Button</a>
// </div>
// </div>
//         `
//         call();
//     }, 4000)
// }


// function post3(call) {
//     setTimeout(() => {
//         cardsWrapper.innerHTML += `
//         <div class="card" style="width: 18rem;">
// <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/182.webp" class="card-img-top" alt="Sunset Over the Sea"/>
// <div class="card-body">
// <h5 class="card-title">Post 3</h5>
// <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
// </div>
// </div>
//         `
//         call();
//     }, 2000)
// }

// function post4() {
//     setTimeout(() => {
//         cardsWrapper.innerHTML += `
//         <div class="card" style="width: 18rem;">
// <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/062.webp" class="card-img-top" alt="Chicago Skyscrapers"/>
// <div class="card-body">
// <h5 class="card-title">Post 4</h5>
// <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
// </div>
// <ul class="list-group list-group-light list-group-small">
// <li class="list-group-item px-4">Cras justo odio</li>
// <li class="list-group-item px-4">Dapibus ac facilisis in</li>
// <li class="list-group-item px-4">Vestibulum at eros</li>
// </ul>
// <div class="card-body">
// <a href="#" class="card-link">Card link</a>
// <a href="#" class="card-link">Another link</a>
// </div>
// </div>
//         `

//     }, 3000)
// }



// post1();
// post2();
// post3();
// post4();



// post1(()=>{
// post2(()=>{
//     post3(()=>{
//         post4();
//     })
// })
// })


// document.getElementById('para').addEventListener('click',()=>{
//     console.log('clicked on para')
// })



// console.log(para.innerText)



// function post1(username,cb){
//     console.log(`Hi ${username}`)
//     cb();
// }


// post1('Arif',()=>{
//     console.log('This is from callback function')
// })




// function post1(cb){
//     setTimeout(()=>{
//         console.log('Post 1')
//         cb();
//     },5000)
// }
// function post2(cb){
//     setTimeout(()=>{
//         console.log('Post 2')
//         cb();
//     },2000)
// }
// function post3(cb){
//       setTimeout(()=>{
//         console.log('Post 3')
//         cb();
//     },1000)
// }
// function post4(){
//       setTimeout(()=>{
//         console.log('Post 4')

//       },3000)
// }
// post1(()=>{
//    post2(()=>{
//     post3(()=>{
//         post4();
//     })
//    })
// })
// post1()
// post2()
// post3()
// post4()


// let postArray = [
//     {
//       imageName: "https://mdbcdn.b-cdn.net/img/new/standard/nature/111.webp",

//     }
// ]



function post1(callBackPost) {
    setTimeout(() => {
        let cardsWrapper = document.getElementById('cardsWrapper');
        cardsWrapper.innerHTML += `
        <div class="card">
          <div class="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
          <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/111.webp" class="img-fluid"/>
          <a href="#!">
            <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
          </a>
          </div>
          <div class="card-body">
          <h5 class="card-title">Post 1</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#!" class="btn btn-primary" data-mdb-ripple-init>Button</a>
          </div>
    </div>
        
        `
        callBackPost();
    },5000)

}


function post2(callBackPost) {
    setTimeout(() => {
        let cardsWrapper = document.getElementById('cardsWrapper');
        cardsWrapper.innerHTML += `
        <div class="card">
          <div class="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
          <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/111.webp" class="img-fluid"/>
          <a href="#!">
            <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
          </a>
          </div>
          <div class="card-body">
          <h5 class="card-title">Post 2</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#!" class="btn btn-primary" data-mdb-ripple-init>Button</a>
          </div>
    </div>
        
        `
        callBackPost();
    },3000)

}


function post3(callBackPost) {
    setTimeout(() => {
        let cardsWrapper = document.getElementById('cardsWrapper');
        cardsWrapper.innerHTML += `
        <div class="card">
          <div class="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
          <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/111.webp" class="img-fluid"/>
          <a href="#!">
            <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
          </a>
          </div>
          <div class="card-body">
          <h5 class="card-title">Post 3</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#!" class="btn btn-primary" data-mdb-ripple-init>Button</a>
          </div>
    </div>
        
        `
        callBackPost();
    },4000)

}


function post4() {
    setTimeout(() => {
        // let cardsWrapper = document.getElementById('cardsWrapper');
        cardsWrapper.innerHTML += `
        <div class="card">
          <div class="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
          <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/111.webp" class="img-fluid"/>
          <a href="#!">
            <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
          </a>
          </div>
          <div class="card-body">
          <h5 class="card-title">Post 4</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#!" class="btn btn-primary" data-mdb-ripple-init>Button</a>
          </div>
    </div>
        
        `
    },2000)

}




// post1(()=>{
//     post2(()=>{
//         post3(()=>{
//             post4();
//         })
//     })
// })










