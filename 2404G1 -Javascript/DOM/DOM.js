// console.log(document.getElementsByTagName('h1')[2].children)
// console.log(document.getElementsByClassName('if'))
// console.log(document.getElementById('ele').children)
// console.log(document.getElementById('ele').childNodes[1])

// document.getElementById('errorMsg').innerText = 'Kindly enter valid number'
// background-color
// backgroundColor
// document.getElementById('errorMsg').style.color = 'red'
// document.getElementById('errorMsg').style.backgroundColor = 'black'
// document.getElementById('errorMsg').style.border = '3px solid yellow'


// let errorMsg = document.getElementById('errorMsg');
// let anchor = document.getElementById('anchor');
// console.log(errorMsg)

// errorMsg.style.backgroundColor = 'black'

// errorMsg.innerText = 'This is the button: <a href="#">Click me</a>'
// errorMsg.innerHTML = 'This is the button: <a href="#">Click me</a>'


// anchor.href = 'www.google.com'
// anchor.setAttribute('href','www.google.com')
// console.log(anchor.getAttribute('href'))


// let errorMsg = document.querySelector('#errorMsg');

// console.log(errorMsg)
// errorMsg.innerHTML = 'This is error'

// let hd = document.querySelectorAll('.hd');
// console.log(hd)


// let wrapper = document.getElementById('wrapper');

// console.log(wrapper)

// let a = document.createElement('button');
// a.innerHTML = 'Click me'
// a.setAttribute("href",'#')
// wrapper.append(a)
// wrapper.append(p)
// wrapper.remove()


// let wrapper = document.getElementById('wrapper');

// wrapper.innerHTML = "<style> a{color: tomato;}</style><a href='#'>Click me</a> <span class='text-danger'>This is a praragraph</span>"


// 

// const productsArray =[
//     {
//         prodName: "Eco-Friendly Water Bottle",
//         prodPrice: 24.99,
//         prodDescription: "A sustainable and stylish water bottle made from recycled materials. Keeps drinks cold for 24 hours or hot for 12 hours.",
//         prodImage: "https://example.com/images/eco-friendly-water-bottle.jpg"
//     },
//     {
//         prodName: "Organic Cotton T-Shirt",
//         prodPrice: 19.99,
//         prodDescription: "Soft and comfortable T-shirt made from 100% organic cotton. Available in various colors and sizes.",
//         prodImage: "https://example.com/images/organic-cotton-t-shirt.jpg"
//     },
//     {
//         prodName: "Bluetooth Wireless Earbuds",
//         prodPrice: 59.99,
//         prodDescription: "High-quality wireless earbuds with noise-cancellation and long battery life.",
//         prodImage: "https://example.com/images/bluetooth-wireless-earbuds.jpg"
//     },
//     {
//         prodName: "Stainless Steel Travel Mug",
//         prodPrice: 15.99,
//         prodDescription: "Durable travel mug with double-wall insulation. Keeps beverages hot or cold for hours.",
//         prodImage: "https://example.com/images/stainless-steel-travel-mug.jpg"
//     },
//     {
//         prodName: "Smart Fitness Tracker",
//         prodPrice: 79.99,
//         prodDescription: "Advanced fitness tracker with heart rate monitoring, sleep tracking, and step counting.",
//         prodImage: "https://example.com/images/smart-fitness-tracker.jpg"
//     },
//     {
//         prodName: "Portable Phone Charger",
//         prodPrice: 29.99,
//         prodDescription: "Compact and high-capacity portable charger for keeping your devices powered on the go.",
//         prodImage: "https://example.com/images/portable-phone-charger.jpg"
//     },
//     {
//         prodName: "Eco-Friendly Bamboo Cutlery Set",
//         prodPrice: 12.99,
//         prodDescription: "Reusable bamboo cutlery set including fork, knife, spoon, and straw. Perfect for reducing plastic waste.",
//         prodImage: "https://example.com/images/eco-friendly-bamboo-cutlery-set.jpg"
//     },
//     {
//         prodName: "Electric Kettle",
//         prodPrice: 34.99,
//         prodDescription: "Fast-boiling electric kettle with automatic shutoff and a sleek stainless steel design.",
//         prodImage: "https://example.com/images/electric-kettle.jpg"
//     },
//     {
//         prodName: "Memory Foam Pillow",
//         prodPrice: 39.99,
//         prodDescription: "Ergonomic memory foam pillow that provides excellent support and comfort for a good night's sleep.",
//         prodImage: "https://example.com/images/memory-foam-pillow.jpg"
//     },
//     {
//         prodName: "LED Desk Lamp",
//         prodPrice: 22.99,
//         prodDescription: "Adjustable LED desk lamp with touch controls and multiple brightness levels. Ideal for any workspace.",
//         prodImage: "https://example.com/images/led-desk-lamp.jpg"
//     },
//     {
//         prodName: "Travel Backpack",
//         prodPrice: 89.99,
//         prodDescription: "Durable and spacious travel backpack with multiple compartments and padded shoulder straps.",
//         prodImage: "https://example.com/images/travel-backpack.jpg"
//     },
//     {
//         prodName: "Silicone Baking Mats",
//         prodPrice: 14.99,
//         prodDescription: "Non-stick silicone baking mats perfect for baking and easy cleanup. Set of 2 mats included.",
//         prodImage: "https://example.com/images/silicone-baking-mats.jpg"
//     },
//     {
//         prodName: "Ceramic Plant Pot",
//         prodPrice: 17.99,
//         prodDescription: "Elegant ceramic plant pot suitable for indoor and outdoor plants. Available in various sizes.",
//         prodImage: "https://example.com/images/ceramic-plant-pot.jpg"
//     },
//     {
//         prodName: "Multifunctional Swiss Army Knife",
//         prodPrice: 39.99,
//         prodDescription: "Versatile Swiss Army knife with multiple tools including knife, screwdriver, and bottle opener.",
//         prodImage: "https://example.com/images/multifunctional-swiss-army-knife.jpg"
//     },
//     {
//         prodName: "Wireless Charging Pad",
//         prodPrice: 25.99,
//         prodDescription: "Sleek wireless charging pad compatible with most Qi-enabled devices. Fast charging capabilities.",
//         prodImage: "https://example.com/images/wireless-charging-pad.jpg"
//     },
//     {
//         prodName: "Wool Throw Blanket",
//         prodPrice: 49.99,
//         prodDescription: "Warm and cozy wool throw blanket perfect for lounging or adding a touch of style to your living room.",
//         prodImage: "https://example.com/images/wool-throw-blanket.jpg"
//     },
//     {
//         prodName: "Outdoor Hammock",
//         prodPrice: 64.99,
//         prodDescription: "Comfortable and durable outdoor hammock with easy setup and included carrying case. Ideal for relaxing outdoors.",
//         prodImage: "https://example.com/images/outdoor-hammock.jpg"
//     },
//     {
//         prodName: "Portable Blender",
//         prodPrice: 39.99,
//         prodDescription: "Compact and powerful portable blender for smoothies and shakes on the go. USB rechargeable.",
//         prodImage: "https://example.com/images/portable-blender.jpg"
//     },
//     {
//         prodName: "Digital Alarm Clock",
//         prodPrice: 18.99,
//         prodDescription: "Sleek digital alarm clock with large display, snooze function, and adjustable brightness settings.",
//         prodImage: "https://example.com/images/digital-alarm-clock.jpg"
//     },
//     {
//         prodName: "Camping Lantern",
//         prodPrice: 27.99,
//         prodDescription: "Bright and durable camping lantern with adjustable brightness levels and long battery life.",
//         prodImage: "https://example.com/images/camping-lantern.jpg"
//     },
//     {
//         prodName: "Leather Wallet",
//         prodPrice: 34.99,
//         prodDescription: "Stylish and practical leather wallet with multiple card slots and a coin pocket.",
//         prodImage: "https://example.com/images/leather-wallet.jpg"
//     },
//     {
//         prodName: "Yoga Mat",
//         prodPrice: 29.99,
//         prodDescription: "High-quality yoga mat with non-slip surface and extra cushioning for comfort during your workouts.",
//         prodImage: "https://example.com/images/yoga-mat.jpg"
//     }
// ];



// let wrapper = document.getElementById('wrapper');

// productsArray.map(({prodName,prodImage,prodDescription,prodPrice}) => {
//     wrapper.innerHTML += `
//     <div class="card" style="width: 18rem;">
//   <img src="${prodImage}" class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">${prodName}</h5>
//     <p class="card-text">${prodPrice}</p>
//     <p class="card-text">${prodDescription}</p>
//     <a href="#" class="btn btn-primary">Purchase</a>
//   </div>
// </div>

//     `
// })








// 

























