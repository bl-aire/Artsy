let img = document.getElementById("img");

  let carouselUrl = "https://gist.githubusercontent.com/eniiku/65a95533de1f005eee35d5eb91f3e141/raw/439bc2dd8693b490539eae236918f4a53dd17457/carousel.json";
  //let auctionUrl = "https://gist.githubusercontent.com/eniiku/65a95533de1f005eee35d5eb91f3e141/raw/c7188e070a8670a86883ff57224dcad277814761/auction.json";
  let dropsUrl = "https://gist.githubusercontent.com/eniiku/65a95533de1f005eee35d5eb91f3e141/raw/c7188e070a8670a86883ff57224dcad277814761/drops.json";
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
      `<a href="./detail.html" class="col-md-4 product-card">
        <div>
          <img id="img" src= ${a.url} alt="item">
          <p id="name">${a.name}</p>
          <p id="price">$${a.price.usd}</p>
        </div>
      </a>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("products").innerHTML = card;
  }


