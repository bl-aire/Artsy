let img = document.getElementById("img");

  let carouselUrl = "https://gist.githubusercontent.com/eniiku/65a95533de1f005eee35d5eb91f3e141/raw/439bc2dd8693b490539eae236918f4a53dd17457/carousel.json";
  //let auctionUrl = "https://gist.githubusercontent.com/eniiku/65a95533de1f005eee35d5eb91f3e141/raw/c7188e070a8670a86883ff57224dcad277814761/auction.json";
  //let dropsUrl = "https://gist.githubusercontent.com/eniiku/65a95533de1f005eee35d5eb91f3e141/raw/c7188e070a8670a86883ff57224dcad277814761/drops.json";
  let productsUrl = "https://gist.githubusercontent.com/eniiku/65a95533de1f005eee35d5eb91f3e141/raw/c7188e070a8670a86883ff57224dcad277814761/products.json";

  // Defining async function
  async function getapi(productsUrl) {

    // Storing response
    const response = await fetch(productsUrl);

    // Storing data in form of JSON
    var data = await response.json();
    
    let products = data.products.slice(0, 9);

    console.log(products);

    show(products);

  }
  // Calling that async function
  getapi(productsUrl);

  // Function to define innerHTML for HTML table
  function show(products) {

    let card = ''

    // Loop to access all rows
    for (let a of products) {
      card += 
      `<a href="./detail.html" class="group col-md-4 product-card">
        <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
          <img id="img" src=${a.url} alt="item" class="h-full w-full object-cover object-center group-hover:opacity-75">
        </div>
        <h4 id="name" class="mt-4 text-sm text-gray-700">${a.name}</h4>
        <p id="price" class="mt-1 text-lg font-medium text-gray-900">$${a.price.usd}</p>
      </a>`
      
      
      
      ;
    }
    // Setting innerHTML as tab variable
    document.getElementById("products").innerHTML = card;
  }


  
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// CHECKOUT
function openDetails(checkout) {
  var i;
  var x = document.getElementsByClassName("checkout");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  document.getElementById(checkout).style.display = "block"; 
}


