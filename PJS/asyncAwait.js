
function post1() {
    return new Promise((resolve, reject) => {
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
            resolve();

        },5000)
    })
 

}


function post2() {
    return new Promise((resolve, reject) => {
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
            resolve()
        },3000)
    
    })
  
}


function post3() {
    
    return new Promise((resolve, reject) => {
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
            resolve()
        },4000)  

    })


}


function post4() {
 return new Promise((resolve, reject) => {
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
          <h5 class="card-title">Post 4</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#!" class="btn btn-primary" data-mdb-ripple-init>Button</a>
          </div>
    </div>
        
        `
        resolve()
    },2000)
  })

}

async function run(){
 try
 {
    await post1()
    await post2()
    await post3()
    await post4()
 }
 catch(e)
 {
    console.error(e)
 }
}

run();
